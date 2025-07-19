import express from 'express';
import { GetAllEmp, GetNewEmp, GetOldEmp } from '../controllers/EmpController.js';

let routes = express.Router();

routes.get("/", GetAllEmp);
routes.get("/new", GetNewEmp);
routes.get("/old", GetOldEmp);

export default routes;