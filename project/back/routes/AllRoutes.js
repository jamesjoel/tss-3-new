import express from 'express';
import TurfRoutes from './TurfRoutes.js'
import UserRoutes from './UserRoutes.js'
import BusinessRoutes from './BusinessRoutes.js'
import UserAuthRoute from './UserAuthRoutes.js'
import BusinessAuthRoute from './BusinessAuthRoutes.js'
const routes = express.Router();

routes.use("/api/v1/turf", TurfRoutes);
routes.use("/api/v1/user", UserRoutes);
routes.use("/api/v1/user/auth", UserAuthRoute);


routes.use("/api/v1/business", BusinessRoutes);
routes.use("/api/v1/business/auth", BusinessAuthRoute);

export default routes;