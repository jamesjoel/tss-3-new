import express from "express";
import { PORT } from './config/config.js';
import AllRoutes from './routes/AllRoutes.js';


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(AllRoutes);
app.listen(PORT,()=>{
    console.log("server is reunning port " , PORT);

    
})
