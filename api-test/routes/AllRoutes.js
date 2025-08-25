import express from 'express'
import HotelRoutes from './HotelsRoutes.js'
import StuRoutes from './StudentRoutes.js'
const routes = express.Router();

routes.use("/api/v1/hotels", HotelRoutes);
routes.use("/api/v1/student", StuRoutes);

export default routes;