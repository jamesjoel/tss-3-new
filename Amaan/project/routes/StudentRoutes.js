import express from 'express';
import { SelectAllStudents, SaveStudent, HelpStudents, GetAllStudentsByCity } from '../controllers/StudentController.js';
const routes = express.Router();

routes.get("/",SelectAllStudents);
routes.post("/", SaveStudent);
routes.get("/help/:a/:b", HelpStudents)
routes.get("/city/:a", GetAllStudentsByCity)

export default routes;