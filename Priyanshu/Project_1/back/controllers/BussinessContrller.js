import Bussiness from "../model/Bussiness.js";
import sha1 from 'sha1'


let SaveBussiness = async (req,res)=>{
    delete req.body.repassword;
    req.body.password = sha1(req.body.password)
    await Bussiness.create(req.body);
    res.send({success:true})

}

export {SaveBussiness}