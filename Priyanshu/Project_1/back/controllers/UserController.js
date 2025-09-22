import User from "../model/User.js";
import sha1 from 'sha1'


let SaveUser = async (req,res)=>{
    delete req.body.repassword;
    req.body.password = sha1(req.body.password)
    await User.create(req.body);
    res.send({success:true})

}

export {SaveUser}