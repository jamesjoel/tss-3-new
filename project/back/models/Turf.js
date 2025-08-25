import mongoose from '../db/connect.js';

const TurfSchema = mongoose.Schema({
    title : String,
    price : Number,
    address : String,
    contact : String,
    image : String,
    timing : {type : String, default : ""},
},{collection : "turf", timestamps : true})

const Turf = mongoose.model("turf", TurfSchema);

export default Turf;