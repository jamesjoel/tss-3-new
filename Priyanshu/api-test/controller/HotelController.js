import Hotel from "../model/Hotels.js";
const GetAllHotels = async(req,res)=>{
    let result = await Hotel.find();
    res.send(result);

}
const GetHotelsById = async(req,res)=>{
    let id = req.params.id;
    let result  = await Hotel.find({_id : id});
    res.send()
}
const SaveHotels = async(req,res)=>{
    let result = await Hotel.create(req.body);
    res.send({message : "data Saved" ,result : result});


}
const DeleteHotelsById = async(req,res)=>{
    let id  = req.params.id;
    let result = await Hotel.deleteMany({_id : id});
    res.send({message : "data deleted", result : result});


}
const UpdateHotelsById = async(req,res)=>{
    let id = req.params.id;
    let result = await Hotel.updateMany({_id : id},req.body);
    res.send({message : "data updated",result :result});
} 

export {GetAllHotels,GetHotelsById,SaveHotels,DeleteHotelsById,UpdateHotelsById};
