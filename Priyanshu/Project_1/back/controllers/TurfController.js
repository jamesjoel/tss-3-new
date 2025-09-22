import { JWT_KEY } from "../config/config.js";
import Turf from "../model/Turf.js";
import jwt from 'jsonwebtoken'

let GetAllTurf = async (req, res) => {
    let result = await Turf.find().populate("bussinessId").exec();
    res.send(result)
}
let GetTurfById = async(req,res)=>{
    let id = req.params.id
    let result = await Turf.find({_id :id}).populate("bussinessId").exec();
    res.send(result[0])
}


let SaveAllTurf = async (req, res) => {
    if (req.headers.authorization) {         //isme token aaya he 
        let token = req.headers.authorization;     // isme token ko token nam ke variable me nikala he
        let busobj = jwt.decode(token,JWT_KEY)     //isme token ko decode kara he
        if(busobj){                                   // token aaya he or correct he 
            // console.log(busobj);
            req.body.bussinessId = busobj._id;
            console.log(req.body);
        let result = await Turf.create(req.body)
        res.send({ success: true, result: result })
        }else {                                  //token aaya he or correct nhi he
        res.send({success:false});

    }

    } else {                                  //token aaya hi nhi he
        res.send({success:false});

    }


}
let DeleteAll = async (req, res) => {
    await Turf.deleteMany();
    res.send("deleted")
}

export { GetAllTurf, SaveAllTurf, DeleteAll,GetTurfById }