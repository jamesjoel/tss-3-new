import express from 'express';
import {GetAllTurf, SaveTurf, DeleteAll, GetTurfById} from '../controllers/TurfController.js'
const routes = express.Router();

routes.get("/", GetAllTurf);
routes.get("/:id", GetTurfById);
routes.post("/", SaveTurf);
routes.get("/deletesareturf", DeleteAll);

export default routes;