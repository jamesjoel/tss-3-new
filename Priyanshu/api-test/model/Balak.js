import mongoose from '../db/Connect.js';


const BalakSchema = mongoose.Schema({
    name : String,
    age : Number,
    gender : String
})

const Balak = mongoose.model("balak" ,BalakSchema);

export default Balak;
