import User from "../model/User.js";
import sha1 from 'sha1'
import jwt from 'jsonwebtoken'
import { JWT_KEY } from "../config/config.js";


let Auth =async(req,res)=>{
    let {email,password}=req.body;
    let result = await User.find({email : email});
    // console.log(result)
    if(result.length==1)
    {
        if(result[0].password == sha1(password)){
            let userobj = {_id : result[0]._id, email:result[0].email };
            let token = jwt.sign(userobj,JWT_KEY)
            res.send({success : true, token : token, name:result[0].name })  //is line me ek message ja raha hre or token me token ja
            //  raha he name me result ke 0 index par jo value aa rahi he usme se name nikal ke front par bhejega
        }
        else{
            res.send({success : false, errType : 2})
        }

    }else{
        res.send({success : false, errType : 1})
    }

}

export {Auth}