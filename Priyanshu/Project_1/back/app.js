import express from "express";
import { PORT } from "./config/config.js";
import cors from 'cors'
import AllRoutes from './routes/AllRoutes.js';
import path from 'path';

const app=express();
app.use(express.static(path.resolve()+"/public"));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(AllRoutes)

app.listen(PORT,()=>{
    console.log("Project server is running port",PORT)
});





