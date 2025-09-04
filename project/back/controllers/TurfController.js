import Turf from "../models/Turf.js";
import jwt from 'jsonwebtoken'

let GetAllTurf = async(req, res)=>{
    let result = await Turf.find().populate("businessId").exec();
    res.send(result)
}
let GetTurfById = async(req, res)=>{
    let id = req.params.id;
    let result = await Turf.find({_id : id}).populate("businessId").exec();
    res.send(result[0]);
}

let SaveTurf = async(req, res)=>{

    if(req.headers.authorization){ // token aaya he
        let token = req.headers.authorization;
        let bussobj = jwt.decode(token, "kuch bhi")
        if(bussobj){ // token correct he
            // console.log(bussobj);
            req.body.businessId = bussobj._id;
            let result = await Turf.create(req.body)
            res.send({success:true, result:result})
        }else{ // token aaya to sahi lekin correct nahi he
            res.send({success:false});
        }
    }else{ // token aaya hi nahi
        res.send({success:false});
    }

    
}

let DeleteAll = async(req, res)=>{
    await Turf.deleteMany();
    res.send("deleted")
}

export {GetAllTurf, SaveTurf, DeleteAll, GetTurfById}