// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const manSchema = new Schema({
    MAN_ANNOUNCEMENT_DATE_TIME :{
        type : Date,
        // index: true, // Index created below..!!!
        // unique: true,
    },

    MAN_ANNOUNCEMENT_PREFIX :{
        type : String,
    },

    MAN_ANNOUNCEMENT :{
        type : String,
    },

    MAN_EXPIRY_DATE :{
        type : String,  /*Need to use type Date.......Custom date fromate needed */
    },
  
});
manSchema.index({MAN_ANNOUNCEMENT_DATE_TIME:1, MAN_ANNOUNCEMENT:1}, {unique: true})
export default mongoose.models.man_md || mongoose.model('man_md', manSchema);
// module.exports= mongoose.model('trd', trdSchema);