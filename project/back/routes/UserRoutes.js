import express from 'express'
import {SaveUser} from '../controllers/UserController.js'

const routes = express.Router();

routes.post("/", SaveUser);

export default routes;

