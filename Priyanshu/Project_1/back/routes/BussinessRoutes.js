import express from "express";
import { SaveBussiness } from "../controllers/BussinessContrller.js";

const routes = express.Router();
routes.post("/", SaveBussiness);

export default routes;
