import express from 'express';
import StuRoute from './StudentRoutes.js'
import TeacherRoute from './TeacherRoutes.js'

import UserRoute from './UserRoutes.js'
import EmpRoutes from './EmpRoutes.js'
import ProRoutes from './ProRoutes.js'
import OrderRoutes from './OrderRoutes.js'
const routes = express.Router();

routes.use("/api/v1/student", StuRoute);
routes.use("/api/v1/teacher", TeacherRoute);
routes.use("/api/v1/employee", EmpRoutes);
routes.use("/api/v1/user", UserRoute)
routes.use("/api/v1/product", ProRoutes)
routes.use("/api/v1/order", OrderRoutes)




export default routes;