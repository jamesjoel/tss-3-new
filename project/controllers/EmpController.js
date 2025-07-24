let GetAllEmployee = (req, res)=>{
    let data = [
        { 
            id : 1,
            name : "rohit"
        }
    ]

    res.send(data);
}
let GetNewEmployee = (req, res)=>{
    res.send("new employee")
}
let GetOldEmployee = (req, res)=>{
    res.send("old employee")
}

export {GetAllEmployee, GetNewEmployee, GetOldEmployee}