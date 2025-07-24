import express from "express";
import {
    GetAllHotels,
    GetHotelsById,
    SaveHotels,
    DeleteHotelsById,
    UpdateHotelsById
} from '../controller/HotelController.js';

const routes = express.Router();

routes.get("/",GetAllHotels);
routes.get("/:id",GetHotelsById);
routes.post("/",SaveHotels);
routes.put("/:id",UpdateHotelsById)
routes.delete("/:id",DeleteHotelsById);


export default routes;

