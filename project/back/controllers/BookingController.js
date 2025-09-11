import Booking from "../models/Booking.js";
import jwt from 'jsonwebtoken'
import { JWT_KEY } from "../config/config.js";
let SaveBooking = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let userobj = jwt.decode(token, JWT_KEY);
        if(userobj){
            req.body.user_id = userobj._id;
            await Booking.create(req.body);
            res.send({success:true});
        }else{

            res.send({success:false, msg : "Not Authorized User"})
        }

    }else{
        res.send({success:false, msg : "Not Authorized User"})
    }
    
}

export {SaveBooking}