import mongoose from '../db/Connect.js';

const TurfSchema = mongoose.Schema({
    title : String,
    price : Number,
    address : String,
    contact : String,
    image : String,
    detail:String,
    timing_open: {type:String,default : ""},
    timing_close: {type:String,default : ""},
    lat:Number,
    long:Number,
    bussinessId : {type : mongoose.Schema.Types.ObjectId,ref:"bussiness"}
},{collection :"turf",timestamps : true})

const Turf = mongoose.model("turf",TurfSchema)


export default Turf;