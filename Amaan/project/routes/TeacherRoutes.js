import express from 'express';
import {GetAllTeacher, TeacherInfo} from '../controllers/TeacherController.js';
const routes = express.Router();

routes.get("/", GetAllTeacher);
routes.get("/info", TeacherInfo);

export default routes;