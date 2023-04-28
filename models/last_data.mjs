// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const lastDataSchema = new Schema({
    companiesLastData:{
        type: String,
    },
    circuit_breaksLastData:{
        type: String,
    },
    idxLastData:{
        type: String,
    },
    manLastData:{
        type: String,
    },
    mkistatLastData:{
        type: String,
    },
    trdLastData:{      
        type: String,
    },
    price_earningsLastData:{
        type: String,
    }

});
export default mongoose.models.lastData || mongoose.model('lastData', lastDataSchema);