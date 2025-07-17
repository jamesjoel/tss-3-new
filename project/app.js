import express from 'express';
import AllRoutes from './routes/AllRoutes.js'
import { PORT } from './config/config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(AllRoutes);



// const port = 3000;
app.listen(PORT, ()=>{
    console.log("Server running with port ", PORT);
})

// username : jamessteppingstone
// password : RcqeDYUOzKtzHEt0

// mongodb+srv://jamessteppingstone:<db_password>@cluster0.juoapks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0