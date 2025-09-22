import express from 'express';
import OwnerRoutes from './OwnerRoutes.js';

const routes = express.Router();

routes.use ("/api/v1/owner",OwnerRoutes)

export default routes;
