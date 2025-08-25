import mongoose from "../db/connect.js";

let ProSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String
})

let Pro = mongoose.model("product", ProSchema);

export default Pro;