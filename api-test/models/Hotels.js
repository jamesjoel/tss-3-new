import mongoose from "../db/connect.js";
// import mongoose from "mongoose";


const HotelSchema = mongoose.Schema({
    title : String,
    price : Number, 
    type : String,
    city : String
}); 
// { collection : "hotel"})

const Hotel = mongoose.model("hotel", HotelSchema);

export default Hotel;