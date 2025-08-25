import express from 'express';
import {SelectAllStudent, SaveStudent, UpdateStudentById, HelpStudent, GetAllStudentByCity, RemoveStudentById} from '../controllers/StudentController.js'
const routes = express.Router();
// localhost:3000/api/v1/student (get)
routes.get("/", SelectAllStudent);
// localhost:3000/api/v1/student (post)
routes.post("/", SaveStudent);
// localhost:3000/api/v1/student/help/india/25500 (post)
routes.get("/help/:a/:b", HelpStudent)

// :3000/api/v1/student/city/indore


routes.get("/city/:a", GetAllStudentByCity)


// :3000/api/v1/student/city/demo

routes.delete("/:id", RemoveStudentById);

routes.put("/:id", UpdateStudentById)
// :3000/api/v1/student/524sdfg5sd2g4er5

export default routes;