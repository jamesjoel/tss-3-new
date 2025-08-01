import express from 'express';
import AllRoutes from './routes/AllRoutes.js'
import {PORT} from './config/config.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(AllRoutes);
//const port = 3000;

app.listen(PORT, ()=>{
    console.log("Server starting with port",PORT);
})
