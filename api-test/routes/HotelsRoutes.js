import express from 'express';
import { UpdateHotelsById, 
    GetAllHotels, 
    GetHotelsById, 
    DeleteHotelsById, 
    SaveHotels } from '../controllers/HotelController.js'

const routes = express.Router();

routes.get("/", GetAllHotels);

routes.get("/more", (req, res)=>{
    console.log(req.query);
})

routes.get("/:id", GetHotelsById);



routes.post("/", SaveHotels);
routes.delete("/:id", DeleteHotelsById);
routes.put("/:id", UpdateHotelsById);


export default routes;