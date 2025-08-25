import Turf from "../models/Turf.js";

let GetAllTurf = async(req, res)=>{
    let result = await Turf.find();
    res.send(result)
}

let SaveTurf = async(req, res)=>{
    let result = await Turf.create(req.body)
    res.send({success:true, result:result})
}


export {GetAllTurf, SaveTurf}