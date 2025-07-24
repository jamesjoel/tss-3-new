import Teacher from '../models/Teacher.js'


let GetAllTeacher = (req, res)=>{
    res.send("hello");
}


let TeacherInfo = (req, res)=>{
    res.send("Teacher Info")
}


let SaveTeacher = async(req, res)=>{
    await Teacher.create(req.body);
    res.send({message : "Data Saved"});
}


export {GetAllTeacher, TeacherInfo, SaveTeacher};