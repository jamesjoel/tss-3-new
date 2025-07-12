import express from 'express';
import StuRoute from './StudentRoutes.js'
import TeacherRoute from './TeacherRoutes.js'
import EmpRoute from './EmpRoutes.js'

const routes = express.Router();

routes.use("/api/v1/student", StuRoute);
routes.use("/api/v1/teacher", TeacherRoute);
routes.use("/api/v1/employee", EmpRoute);



export default routes;