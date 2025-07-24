import express from 'express';
import { SaveUser, GetAllUser } from '../controllers/UserController.js';
let routes = express.Router();

routes.get("/", GetAllUser);
routes.post("/", SaveUser);

export default routes;