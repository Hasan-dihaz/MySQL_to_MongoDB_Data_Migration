// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const circuitbreaksSchema = new Schema({
    
    trade_code:{
        type: String,
    },	
    breaker:{
        type: Number,
    },	
    tickSize:{
        type: Number,
    },	
    openAdjPrice:{
        type: Number,
    },	
    floorPrice:{
        type: Number,
    },	
    lowerLimit:{
        type: Number,
    },	
    upperLimit:{
        type: Number,
    },	
    floorPriceBlockMarket:{
        type: Number,
    },
    created_at:{
        type: Date,
    },	
    updated_at:{
        type: Date,
    },	
    

});
circuitbreaksSchema.index({ created_at: 1, trade_code: 1}, { unique: true }) //Making compund Unique Key...!!!

export default mongoose.models.circuitbreaks_dse || mongoose.model('circuitbreaks_dse', circuitbreaksSchema);
// export default db.model('idx', idxSchema);