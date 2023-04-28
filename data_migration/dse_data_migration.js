import dotenv from 'dotenv';
dotenv.config();

import { pool } from "../db_config/dhaka_stock_exchange_db.mjs";
import companiesModel from "../models/company.mjs";
import circuitbreaksModel from "../models/circuit_breaks.mjs";
import price_earningsModel from '../models/price_earnings.mjs';
import mongoose from "mongoose";
import { getLastData, setLastData } from "../last_data.js";

// Reading MySQL dhaka_stock_exchange tables name and storing into an array.................


async function tableName_DSE() {
  const tables_DSE = [];
  const results    = await pool.query(`SHOW TABLES`);
  for (let i in results) {
    // console.log("i", results[i]);
    tables_DSE.push(results[i].Tables_in_dse_scraped_data);
  }
  return tables_DSE;
}


const dse_tables = async () => {

  var mySql_tables_DSE;
  mySql_tables_DSE = await tableName_DSE();

  console.log("mySql_tables_DSE", mySql_tables_DSE);

  // const db = await dbConnect();  //***Connection to the MongoDB Database        
  mongoose.connect(process.env.DATABASE_URL); 

 let LastDoc = await getLastData();  //Getting last migration trace from DB.

  mySql_tables_DSE.forEach(async (element) => {
    
    if (element == 'companies') { // element =='price_earnings' || element == 'companies' || element =='circuit_breaks' 
      // console.log(element);
          let table  = element, model, SortOn, LastData, queryTable, selectQuery, fieldName, whereValue;
              fieldName = `${table}LastData`;
              LastData  = LastDoc[0][fieldName];
              // LastData  = '1';

      // console.log("From DSE...",'price_earnings:',LastData, fieldName);
      try {
        if (table == 'companies') {
          model  = companiesModel;
          SortOn = 'created_at';
          whereValue = 'created_at';
          selectQuery = `*`;
          queryTable =`companies`;
        }
        else if(table == 'circuit_breaks'){
          model       = circuitbreaksModel;
          whereValue = 'created_at';
          SortOn      = 'created_at';
          selectQuery = '*'; 
          queryTable = 'circuit_breaks';
        }
        else if(table == 'price_earnings'){
          model       = price_earningsModel;
          whereValue = 'created_at';
          SortOn     = 'created_at';
          selectQuery= '*';
          queryTable = 'price_earnings';
        }
        else {
          throw new Error('No model found');
        }
        let dseResults;

        function dseDataMigration(){
          console.log("LastData.....", LastData);
          dseResults = pool.query(`SELECT
                ${selectQuery}
                FROM 
                ${queryTable}
                WHERE ${whereValue} > '${LastData}'
                ORDER BY ${SortOn}
                `);
                // console.log("dseResults..........", dseResults);
                
          dseResults
              .then(async (results) => {
              if (Object.keys(results).length != 0) {
                console.time(`Writing_Time_to..${table}`);

                if(table == 'circuit_breaks'){
                  console.log("........Object.keys(results).length.........", Object.keys(results).length);
                }

              if(table == 'price_earnings'){ /* 
                                                      *Only For Price Earnings Table
                                                    */
                results.map(async (item)=>{
                  // console.log("price_earnings..........", item);
                    const response = await model.updateOne(
                      {company_code:item.company_code, created_at: item.created_at},
                      {$set:{
                        // company_code:item.code,
                        updated_at:item.updated_at,
                        close_price: item.close_price,
                        ycp: item.ycp,
                        pe_1: item.pe_1,
                        pe_2: item.pe_2,
                        pe_3: item.pe_3,
                        pe_4: item.pe_4,
                        pe_5: item.pe_5,
                        pe_6: item.pe_6,
                        // created_at: item.created_at,
                      }},
                      { upsert: true }
                      );
                    
                    // console.log("Print.......", response);

                })
              }//!=====================
              else if(table == 'companies'){ /* 
                                                      *Only For Price Earnings Table
                                                    */
                results.map(async (item)=>{
                  // console.log("price_earnings..........", item);
                    const response = await model.updateOne(
                      {code: item.code},
                      {$set:{
                        // company_code:item.code,
                        last_agm: item.last_agm,
                        market_capitalization_mn: item.market_capitalization_mn,
                        authorized_capital_mn: item.authorized_capital_mn,
                        paidup_capital_mn: item.paidup_capital_mn,
                        type_of_instrument: item.type_of_instrument,
                        total_outstanding_share_mn: item.pe_3,
                        face_par_value: item.pe_4,
                        sector: item.pe_5,
                        cash_dividend: item.pe_6,
                        dividend_yield_percentage: item.dividend_yield_percentage,
                        bonus_issued_stock_dividend: item.bonus_issued_stock_dividend,
                        pe: item.pe,
                        eps: item.eps,
                        listing_since: item.listing_since,
                        category: item.category,
                        sponsor_director: item.sponsor_director,
                        govt: item.govt,
                        _foreign: item._foreign,
                        public: item.public,
                        address: item.address,
                        phone: item.phone,
                        email: item.email,
                        eps_share: item.eps_share,
                        updated_at: item.updated_at,
                        created_at: item.created_at,
                      }},
                      { upsert: true }
                      );
                    
                    // console.log("Print.......", response);

                })
              }//!================
              else{
                console.log("price_earnings.....2.....", table);
                try {
                  // console.log(".............Writing to DB..........",results);
                  await model.insertMany(results, { ordered: false });
                } catch (error) {
                  console.log("DSE_Error");
                }
                // await model.insertMany(results, { ordered: false });
              }
                console.timeEnd(`Writing_Time_to..${table}`);
                // LastData = results.pop()[SortOn];
                LastData = results.pop()[SortOn].toLocaleString("sv-SE");
                console.log("LastData.....*******.....", LastData);
                await setLastData({[fieldName] : LastData});         //Saving last migrated data trace to DB.

                dseDataMigration(); // Repeatative function Calling...
              }
              else{
                console.log("Task Completed...For...", table);
              }
            });
        }
        dseDataMigration();
      }
      catch (error) {
        console.log(error);
      }
    }
  });
};

export {dse_tables};

