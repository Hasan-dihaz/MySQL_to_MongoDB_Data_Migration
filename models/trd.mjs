// var mongoose = require('mongoose');
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const trdSchema = new Schema({
    TRD_SNO:{
        type: Date,
        index: true,
        unique: true
    },
    TRD_TOTAL_TRADES:{
        type: Number,
    },
    TRD_TOTAL_VOLUME:{
        type: Number,
    },
    TRD_TOTAL_VALUE:{
        type: Number,
    },
    TRD_LM_DATE_TIME:{
        type: Date,
        required: true,
        // index: true,
        // unique: true
    }
  
});
export default mongoose.models.trd_md || mongoose.model('trd_md', trdSchema);
// module.exports= mongoose.model('trd', trdSchema);