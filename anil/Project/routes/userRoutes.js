import express from 'express';
import { SaveUser, GetAllUser, GetUserById } from '../controllers/usercontroller.js'

let routes = express.Router();

routes.get("/", GetUserById)
// routes.get("/", GetAllUser)
routes.post("/", SaveUser)

export default routes;