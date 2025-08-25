import express from 'express';
import {
        SaveEmp,
        GetAllByIdEmp,
        GetAllEmp,
        DeleteEmp,
        UpdateEmp
} from '../controllers/EmployeeController.js'

let routes = express.Router();

routes.get("/", GetAllEmp);
routes.get("/:id", GetAllByIdEmp);
routes.post("/", SaveEmp);
routes.delete("/:id", DeleteEmp);
routes.put("/:id", UpdateEmp);


export default routes;