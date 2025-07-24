import express from "express";
import HotelsRoutes from './HotelsRoutes.js';
import StudentRoutes from './StudentRoutes.js';

const routes = express.Router();


routes.use("/api/v1/hotels",HotelsRoutes)
routes.use("/api/v1/student",StudentRoutes);

export default routes;
