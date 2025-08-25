import express from 'express';
import {SaveOrder, GetAllOrder} from '../controllers/OrderController.js'

let routes = express.Router();

routes.get("/", GetAllOrder)
routes.post("/", SaveOrder)

export default routes;