// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const price_earningsSchema = new Schema({
    
    // company_id:{
    //     type: Number,
    // }, 
    company_code:{
        type:String,
    },
    close_price:{
        type: Number,
    },
    ycp:{
        type: Number,
    },
    pe_1:{
        type: String,
    },
    pe_2:{
        type: String,
    },
    pe_3:{
        type: String,
    },
    pe_4:{
        type: String,
    },
    pe_5:{
        type: String,
    },
    pe_6:{
        type: String,
    },
    // data_updated_at_date:{
    //     type: Date,
    // },
    created_at:{
        type: Date,
    },	
    updated_at:{
        type: Date,
    },	
    

});

price_earningsSchema.index({ created_at: 1, company_code: 1}, { unique: true }) //Making compund Unique Key...!!!


export default mongoose.models.price_earnings_dse || mongoose.model('price_earnings_dse', price_earningsSchema);
// export default db.model('idx', idxSchema);