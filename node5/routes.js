import express from 'express';
import { User, City, Product, Student } from './controllers.js';


const routes = express.Router();


routes.get("/api/v1/user", User)
routes.get("/api/v1/product", Product)
routes.get("/api/v1/city", City)
routes.get("/api/v1/student", Student)



export default routes;