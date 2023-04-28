// const { MongoClient } = require("mongodb");
import {MongoClient} from "mongodb";
const url = "mongodb://localhost:27017/DSE";
const client = new MongoClient(url);
const dataBase = "DSE";

async function dbConnect() {
  let result = await client.connect();
  // let db = result.db(dataBase);
  // const collection = db.collection("company");
  // return collection;
  // return db;
  return result;
}

// module.exports = dbConnect;
export default dbConnect;