import { JWT_KEY } from "../config/config.js";
import Booking from "../model/Booking.js"
import jwt from "jsonwebtoken";


let SaveBooking = async(req,res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let userobj = jwt.decode(token,JWT_KEY)
        if(userobj){
            req.body.user_id = userobj._id
            await Booking.create(req.body)
            res.send({success:true})
            

        }else{
        res.send({success:false,msg:"Not Authorization User"})


        }

    }else{
        res.send({success:false,msg:"Not Authorization User"})
    }
    console.log(req.body);
    console.log(req.headers)
}
export{SaveBooking}