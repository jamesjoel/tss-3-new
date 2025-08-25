import express from 'express';
import {GetAllTurf, SaveTurf} from '../controllers/TurfController.js'
const routes = express.Router();

routes.get("/", GetAllTurf);
routes.post("/", SaveTurf);

export default routes;