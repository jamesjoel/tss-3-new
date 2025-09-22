import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

mongoose
.connect(DB_URL)
.then(()=>{
    console.log("DB is connected ")
})
.catch((err)=>{
    console.log("DB is not connected",err)
})


export default mongoose;




//V089p71xhKeNicEQ
//priyanshujha855

//