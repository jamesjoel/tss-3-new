import express from 'express';
import routes from './routes.js'
const app = express();

app.use(routes);

const port = 3000;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})

