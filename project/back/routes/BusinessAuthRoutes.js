import express from 'express'
import {Auth} from '../controllers/BusinessAuthController.js'
const routes = express.Router();

routes.post("/", Auth);

export default routes;