import mongoose from '../db/connect.js';

const TurfSchema = mongoose.Schema({
    title : String,
    price : Number,
    address : String,
    contact : String,
    image : String,
    detail : String,
    timing_open : {type : String, default : ""},
    timing_close : {type : String, default : ""},
    lat : Number,
    long : Number,
    businessId : { type : mongoose.Schema.Types.ObjectId, ref : "business" }
},{collection : "turf", timestamps : true})

const Turf = mongoose.model("turf", TurfSchema);

export default Turf;