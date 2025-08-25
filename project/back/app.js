import express from 'express';
import cors from 'cors';
import AllRoutes from './routes/AllRoutes.js'
import {PORT} from './config/config.js'
import path from 'path'

const app = express();

app.use(express.static(path.resolve()+"/public"));


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use(AllRoutes);

app.listen(PORT, ()=>{
    console.log("Project Server Running With Port ", PORT)
});


//jamessteppingstone
//Zp9inWoP72HEbh5b
//mongodb+srv://jamessteppingstone:Zp9inWoP72HEbh5b@cluster0.4yvdzdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0