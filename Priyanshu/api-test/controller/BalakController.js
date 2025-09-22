import Balak from "../model/Balak.js";

const SelectAllBalak =  async(req,res)=>{
    let result = await Balak.find();
    res.send(result);
}

const SaveAllBalak = async(req,res)=>{
    let result = await Balak.create(req.body);
    res.send({message:"data saved",result:result})
}
const DeleteBalakById=async(req,res)=>{
    let id = req.parms.id
}