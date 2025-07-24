let GetAllEmp =(req, res)=>{
    let data = [
        {
            id: 101,
            Name: "Sam",
            mail: "sam@gmail.com",
            salary: 20000,
        },
        {
            id: 102,
            Name: "Sunny",
            mail: "sunny@gmail.com",
            salary: 30000,
        },
    ]
    res.send(data);
}

let GetNewEmp = (req, res)=>{
    let data = [
        {
            id: 102,
            Name: "Sunny",
            mail: "sunny@gmail.com",
            salary: 20000,
        }
    ]
    res.send(data);
}

let GetOldEmp = (req, res)=>{
    let data = [
        {
             id: 101,
            Name: "Sam",
            mail: "sam@gmail.com",
            salary: 20000,
        }
    ]
    res.send(data);
}


export {GetAllEmp, GetNewEmp, GetOldEmp};