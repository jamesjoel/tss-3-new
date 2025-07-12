
let SelectAllStudent = (req, res)=>{
    res.send("welcome");
}

let SaveStudent = (req, res)=>{
    // console.log(req.body);
    let {name, age, fee, city, dob} = req.body;
    res.send({message : "Data Saved"});
}

export {SelectAllStudent, SaveStudent}