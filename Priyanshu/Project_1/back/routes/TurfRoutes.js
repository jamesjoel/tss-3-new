import express from "express";
import { DeleteAll, GetAllTurf, GetTurfById, SaveAllTurf } from "../controllers/TurfController.js";

const routes =express.Router()

routes.get("/",GetAllTurf)
routes.post("/",SaveAllTurf)
routes.get("/deletesareturf",DeleteAll)
routes.get("/:id",GetTurfById)

export default routes;