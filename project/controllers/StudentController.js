import Student from '../models/Student.js'

let SelectAllStudent = async (req, res)=>{
    let result = await Student.find();
    res.send(result);
}

let SaveStudent = async(req, res)=>{
    // req.body
    await Student.create(req.body);
    res.send({message : "Data Saved into Mongodb"});
}

export {SelectAllStudent, SaveStudent}