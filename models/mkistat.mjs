// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const mkistatSchema = new Schema({

MKISTAT_INSTRUMENT_CODE :{
    type : String,
},

MKISTAT_INSTRUMENT_NUMBER :{
    type : Number,
},

MKISTAT_QUOTE_BASES :{
    type : String,
},

MKISTAT_OPEN_PRICE :{
    type : Number,
},

MKISTAT_PUB_LAST_TRADED_PRICE :{
    type : Number,
},

MKISTAT_SPOT_LAST_TRADED_PRICE :{
    type : Number,
},

MKISTAT_HIGH_PRICE :{
    type : Number,
},

MKISTAT_LOW_PRICE :{
    type : Number,
},

MKISTAT_CLOSE_PRICE :{
    type : Number,
},

MKISTAT_YDAY_CLOSE_PRICE :{
    type : Number,
},

MKISTAT_TOTAL_TRADES :{
    type : Number,
},

MKISTAT_TOTAL_VOLUME :{
    type : Number,
},

MKISTAT_TOTAL_VALUE :{
    type : Number,
},

MKISTAT_PUBLIC_TOTAL_TRADES :{
    type : Number,
},

MKISTAT_PUBLIC_TOTAL_VOLUME :{
    type : Number,
},

MKISTAT_PUBLIC_TOTAL_VALUE :{
    type : Number,
},

MKISTAT_SPOT_TOTAL_TRADES :{
    type : Number,
},

MKISTAT_SPOT_TOTAL_VOLUME :{
    type : Number,
},

MKISTAT_SPOT_TOTAL_VALUE :{
    type : Number,
},

MKISTAT_LM_DATE_TIME :{
    type : Date,
},
});
mkistatSchema.index({ MKISTAT_LM_DATE_TIME: 1, MKISTAT_INSTRUMENT_CODE: 1}, { unique: true }) //Making compund Unique Key...!!!

export default mongoose.models.mkistat_md || mongoose.model('mkistat_md', mkistatSchema);
// export default db.model('STATS', statsSchema);