import express from 'express';
import { SaveBooking } from '../controllers/BookingController.js';

const routes = express.Router();

routes.post("/", SaveBooking);

export default routes;
