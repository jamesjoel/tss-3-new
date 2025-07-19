import mongoose from 'mongoose';
import { DB_URL} from '../config/config.js'
mongoose
.connect(DB_URL)
.then(()=>{
    console.log("Live Databse is connected...")
})
.catch((err)=>{
    console.log("Live Databse is not connected...",err)
})
export default mongoose;