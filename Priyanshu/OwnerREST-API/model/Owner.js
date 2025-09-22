import mongoose from '../db/Connect.js';

const OwnerSchema = mongoose.Schema({
    name:String,
    address:String,
    rent:Number,
    city:String,
    gender:String
})

const Owner = mongoose.model("owner",OwnerSchema);

export default Owner;
