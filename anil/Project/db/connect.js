import mongoose from 'mongoose';
import { DB_URL } from '../config/config.js';

mongoose

    .connect(DB_URL)
    .then(() => {
        console.log("Live Database Connected")
    })
    .catch((err) => {
        console.log("Live Database NOT Connected", err)
    })

export default mongoose;

