import express from 'express';
import {SelectAllStudent, SaveStudent} from '../controllers/StudentController.js'
const routes = express.Router();

routes.get("/", SelectAllStudent);
routes.post("/", SaveStudent);


export default routes;