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


let RemoveStudentById = async(req, res)=>{
    let id = req.params.id;
    await Student.deleteMany({ _id : id });
    res.send({message : "Data Deleted"});
}

let UpdateStudentById = async(req, res)=>{
    let id = req.params.id;
    await Student.updateMany({_id : id}, req.body);
    res.send({message : "Data Updated"});
}

export {SelectAllStudent, UpdateStudentById, RemoveStudentById, SaveStudent, HelpStudent, GetAllStudentByCity}


/*
    Model.find()    or  conditional find  Modal.find({ condition })
    Model.deleteMany()    or  conditional find  Modal.deleteMany({ gender : "male" })
    Model.updateMany({}, {salary : 20000})    or  conditional find  Modal.deleteMany({ gender : "male" })
    Model.updateMany({ city : "indore"}, {salary : 20000})    or  conditional find  Modal.deleteMany({ gender : "male" })
    
    
    
    Model.updateMany({ _id : "215475121"}, {name : "rohan", gender : "male", contact : 5454})    or  conditional find  Modal.deleteMany({ gender : "male" })

*/