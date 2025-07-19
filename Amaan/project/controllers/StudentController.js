import student from '../models/Student.js'
let SelectAllStudents = async (req, res)=>{
    let result = await student.find();
    res.send(result);
}

let SaveStudent = async (req, res)=>{
    await student.create(req.body);
    res.send({message: "Data Saved into Live Mongodb"});
}

let HelpStudents = async(req, res)=>{
    let x = req.params.a;
    let y = req.params.b;
    console.log(x,y);
}
let GetAllStudentsByCity = async (req, res)=>{
    let x = req.params.a;
    let result = await student.find({city : x});
    if(result.length > 0)
    {
        res.send(result);
    }
    else
    {
        res.send({message : 'No Data Found For this city'})
    }
}

export {SelectAllStudents, SaveStudent, HelpStudents, GetAllStudentsByCity};