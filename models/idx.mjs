// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const idxSchema = new Schema({
    
    IDX_INDEX_ID:{
        type:String,
    },
    IDX_DATE_TIME:{
        type:Date,
    },
    IDX_CAPITAL_VALUE:{
        type:Number,
    },
    IDX_DEVIATION:{
        type:Number,
    },
    lDX_PERCENTAGE_DEVIATION:{      //In mysql database it is written lDX instead of IDX;
        type:Number,
    }

});
idxSchema.index({IDX_INDEX_ID:1, IDX_DATE_TIME:1}, {unique: true})
export default mongoose.models.idx_md || mongoose.model('idx_md', idxSchema);
// export default db.model('idx', idxSchema);