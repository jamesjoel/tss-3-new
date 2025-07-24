import Student from "../model/Student.js";

const SelectAllStu = async(req,res)=>{
    let result = await Student.find();
    res.send(result);


}

const SelectById = async(req,res)=>{
    let id =req.params.id;
    let result = await Student.find({_id : id})
    res.send(result);

}
const Morekey = async(req,res)=>{
    // console.log(req.query)
    let whereObj = req.query;
    let result  = await Student.find(whereObj);
    res.send(result)
}
const SaveStu = async(req,res)=>{
    let result = await Student.create(req.body);
    res.send({message: "data saved",result:result})
}
const UpdateById = async(req,res)=>{
    let id = req.params.id;
    let result = await Student.updateMany({_id:id},req.body)
    res.send({message : "Data Updated",result:result});
    
}
const DeletById = async(req,res)=>{
    let id = req.params.id;
    let result = await Student.deleteMany({_id:id})
    res.send({message : "Data Deleted",result:result});

}



export{SelectAllStu,SelectById,SaveStu,DeletById,UpdateById,Morekey}