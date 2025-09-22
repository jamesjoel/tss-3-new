import express from "express";
import TurfRoutes from "./TurfRoutes.js";
import UserRoutes from './UserRoutes.js'
import BussinessRoutes from './BussinessRoutes.js'
import UserAuthRoutes from './UserAuthRoutes.js'
import BussinessAuthRoutes from './BussinessAuthRoutes.js'
import BookingRoutes from './BookingRoutes.js'
const routes= express.Router()

routes.use("/api/v1/turf",TurfRoutes)
routes.use("/api/v1/user",UserRoutes)
routes.use("/api/v1/user/auth",UserAuthRoutes)
routes.use("/api/v1/bussiness",BussinessRoutes)
routes.use("/api/v1/booking",BookingRoutes)
routes.use("/api/v1/bussiness/auth",BussinessAuthRoutes)
export default routes;