import Business from "../models/Business.js";
import sha1 from 'sha1'

let SaveBusiness = async(req, res)=>{
    delete req.body.repassword;
    req.body.password = sha1(req.body.password);
    await Business.create(req.body);
    res.send({success:true});
}

export {SaveBusiness}