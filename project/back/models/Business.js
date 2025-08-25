import mongoose from '../db/connect.js';

const BusinessSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    contact : String
    
},{timestamps : true})

const Business = mongoose.model("business", BusinessSchema);

export default Business;