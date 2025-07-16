import express from 'express';
import {GetAllTeacher, TeacherInfo, SaveTeacher} from '../controllers/TeacherController.js'
const routes = express.Router();


routes.get("/", GetAllTeacher);
routes.get("/info", TeacherInfo);
routes.post("/", SaveTeacher);

export default routes;