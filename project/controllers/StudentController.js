import Student from '../models/Student.js'

let SelectAllStudent = async (req, res)=>{
    let result = await Student.find();
    res.send(result);
}

let SaveStudent = async(req, res)=>{
    // req.body
    await Student.create(req.body);
    res.send({message : "Data Saved into Live Mongodb"});
}


let HelpStudent = async(req, res)=>{
    let x = req.params.a;
    let y = req.params.b;
    console.log(x, y);
}


let GetAllStudentByCity = async(req, res)=>{
    let x = req.params.a;
    let result = await Student.find({city : x});
    if(result.length > 0)
    {
       res.send(result) 
    }
    else{
        res.send({message :  "No Data Found"});
    }
}

export {SelectAllStudent, SaveStudent, HelpStudent, GetAllStudentByCity}