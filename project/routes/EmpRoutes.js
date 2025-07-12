import express from 'express';
import { GetAllEmployee, GetOldEmployee, GetNewEmployee } from '../controllers/EmpController.js'

let routes = express.Router();

routes.get("/", GetAllEmployee)
routes.get("/new", GetNewEmployee)
routes.get("/old", GetOldEmployee)

export default routes;