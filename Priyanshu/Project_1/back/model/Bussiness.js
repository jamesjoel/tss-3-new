import mongoose from '../db/Connect.js';

const BussinessSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    contact : String,
},{timestamps : true})

const Bussiness = mongoose.model("bussiness",BussinessSchema)


export default Bussiness;