import mongoose from '../db/Connect.js';

const HotelSchema = mongoose.Schema({
    title : String,
    price : Number,
    type  : String,
    city : String
})

const Hotel = mongoose.model("hotel",HotelSchema);

export default Hotel;
