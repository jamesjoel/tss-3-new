import User from '../models/User.js';

let SaveUser = async(req, res)=>{
    await User.create(req.body);
    res.send({message : "Data Saved"})
}

let GetAllUser = async(req, res)=>{
    let result = await User.find();
    res.send(result);
}

export {SaveUser, GetAllUser};