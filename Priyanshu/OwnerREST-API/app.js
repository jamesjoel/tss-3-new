import express from "express";
import { PORT } from "./config/config.js";
import AllRoutes from './routes/AllRoutes.js'

const app = express();

app.use(AllRoutes);
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(PORT,()=>{
    console.log("Server is running PORT",PORT)
})