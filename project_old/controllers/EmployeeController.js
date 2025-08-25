import Employee from '../models/Employee.js';

let GetAllEmp = async(req, res)=>{
    let result = await Employee.find();
    res.send(result);
}
let GetAllByIdEmp = async(req, res)=>{
    let id = req.params.id;
    let result = await Employee.find({_id : id});
    res.send(result);
}
let SaveEmp = async(req, res)=>{
    await Employee.create(req.body);
    res.send({message : "Data Saved"});
}
let DeleteEmp = async(req, res)=>{
    let id = req.params.id;
    await Employee.deleteMany({_id : id});
    res.send({message : "Data Deleted"});
}
let UpdateEmp = async(req, res)=>{
    let id = req.params.id;
    await Employee.updateMany({_id : id}, req.body);
    res.send({message : "Data Updated"});
}

export {GetAllByIdEmp, GetAllEmp, SaveEmp, DeleteEmp, UpdateEmp}