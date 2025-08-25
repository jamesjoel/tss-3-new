import Pro from '../models/Products.js';

let SavePro = async(req, res)=>{
    await Pro.create(req.body);
    res.send({ message : "Date Saved" });
}

let GetAllPro = async(req, res)=>{
    let result = await Pro.find();
    res.send(result);
}

export {SavePro, GetAllPro}