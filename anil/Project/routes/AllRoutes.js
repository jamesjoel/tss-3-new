import express from 'express';
import userRoute from './userRoutes.js'
const routes = express.Router();

routes.use("/api/v1/user", userRoute)


export default routes;