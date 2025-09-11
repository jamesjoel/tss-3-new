import User from '../models/User.js'
import sha1 from 'sha1'
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/config.js'
let Auth = async(req, res)=>{
    let {email, password} = req.body;
    let result = await User.find({email : email});
    if(result.length==1)
    {

        if(result[0].password == sha1(password))
        {
            let userobj = { _id : result[0]._id, email : result[0].email };
            let token = jwt.sign(userobj, JWT_KEY)
            
            res.send({success: true, token : token, name : result[0].name})
        }
        else{
            res.send({success : false, errType : 2});
        }

    }else{
        res.send({success:false, errType : 1})
    }
}

export {Auth};

/*
    let result = await User.find({email : "sdfgsdfg@gg.com"});

*/