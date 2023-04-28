// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const companiesSchema = new Schema({
    code:{
        type: String,
        index: true,
        unique: true,
        required: true
    },

    name:{
        type: String,
    },
 
    last_agm:{
        type: String,
    },
 
    market_capitalization_mn:{
        type: String,
    },
 
    authorized_capital_mn:{
        type : String,
    },
 
    paidup_capital_mn:{
        type : String,
    },
 
    type_of_instrument:{
        type: String,
    },
 
    total_outstanding_share_mn:{
        type: String,
    },
 
    face_par_value:{
        type: String,
    },
 
    sector:{
        type: String,
    },
 
    cash_dividend:{
        type: String,
    },

    dividend_yield_percentage:{
        type: String,
    },
 
    bonus_issued_stock_dividend:{
        type: String,
    },
 
    pe:{
        type: String,
    },
 
    eps:{
        type: String,
    },
 
    listing_since:{
        type: String,
    },
 
    category:{
        type: String,
    },
 
    sponsor_director:{
        type: String,
    },
 
    govt:{
        type: String,
    },
 
    _foreign:{
        type: String,
    },
 
    public:{
        type: String,
    },
 
    address:{
        type: String,
    },
 
    phone:{
        type: String,
    },
 
    email:{
        type: String,
    },

    eps_share:{
        type: String,
    },
 
    updated_at:{
        type: Date,
    },

    created_at:{
        type: Date,
    },
}
);
export default mongoose.models.companies_dse || mongoose.model('companies_dse', companiesSchema);
// export default db.model('idx', idxSchema);