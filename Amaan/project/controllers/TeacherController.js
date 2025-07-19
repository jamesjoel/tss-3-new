let GetAllTeacher = (req, res)=>{
    res.send("Hello");
}

let TeacherInfo = (req, res)=>{
    res.send(
        {
            "Name": "Amaan",
            "Email": "amaan@gmail.com"
        }
    )
}

export {GetAllTeacher, TeacherInfo};