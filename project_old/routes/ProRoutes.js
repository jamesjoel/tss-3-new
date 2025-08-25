import express from 'express';
import {SavePro, GetAllPro} from '../controllers/ProductController.js'

let routes = express.Router();

routes.get("/", GetAllPro)
routes.post("/", SavePro)

export default routes;