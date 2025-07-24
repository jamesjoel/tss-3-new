import express from "express";
import {
    SelectAllStu,
    SelectById,
    SaveStu,
    UpdateById,
    DeletById,
    Morekey
} from '../controller/StudentController.js';


const routes = express.Router();


routes.get("/",SelectAllStu);
routes.get("/more",Morekey)
routes.get("/:id",SelectById);
routes.post("/",SaveStu);
routes.put("/:id",UpdateById);
routes.delete("/:id",DeletById);

export default routes;
