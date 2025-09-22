import express from "express";
import {SelectOwner,
    SelectOwnerById,
    SaveOwner,
    UpdateOwnerById,
    DeleteOwnerById

} from '../controller/OwnerController.js';

const routes = express.Router()

routes.get("/",SelectOwner);
routes.post("/",SaveOwner);
routes.get("/:id",SelectOwnerById);
routes.put("/:id",UpdateOwnerById);
routes.delete("/:id",DeleteOwnerById);


export default routes;
