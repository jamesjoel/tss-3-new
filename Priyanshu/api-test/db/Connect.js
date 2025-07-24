import mongoose from 'mongoose';
import { DB_URL } from '../config/config.js';

mongoose
.connect(DB_URL)
.then(()=>{
    console.log("connected");

})
.catch((err)=>{
    console.log("not connected",err);

})

export default mongoose;
