import express from 'express'
import {SaveBusiness} from '../controllers/BusinessController.js'

const routes = express.Router();

routes.post("/", SaveBusiness);

export default routes;

