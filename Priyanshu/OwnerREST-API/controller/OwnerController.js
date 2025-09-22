import Owner from "../model/Owner.js";

const SelectOwner = async(req,res)=>{
    let result = await Owner.find();
    res.send(result);
}

const SaveOwner = async(req,res)=>{
    let result = await Owner.create(req.body);
    res.send({message:"data save",result:result});
    

}
const SelectOwnerById = async(req,res)=>{
    let id = req.params.id ;
    let result  = await Owner.find({_id : id});
    res.send(result);

}
const UpdateOwnerById = async(req,res)=>{
    let id = req.params.id ;
    let result  = await Owner.updateMany({_id : id},req.body);
    res.send({message : "data updated",result:result});

}
const DeleteOwnerById = async(req,res)=>{
    let id = req.params.id ;
    let result  = await Owner.deleteMany({_id : id});
    res.send({message:"data deletde",result:result});


}


export {SelectOwner,SelectOwnerById,SaveOwner,UpdateOwnerById,DeleteOwnerById};