import mongoose from 'mongoose';
import { DB_url } from '../config/config.js';

mongoose
.connect(DB_url)
.then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log("Not Connected",err)
})


export default mongoose;
