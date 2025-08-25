import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

mongoose
.connect(DB_URL)
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log("NOT CONNECTED ", err)
})

export default mongoose;