import Hotel from "../models/Hotels.js";



const GetAllHotels = async(req, res)=>{
    let result = await Hotel.find();
    res.send(result);
}
const GetHotelsById = async(req, res)=>{
    let id = req.params.id;
    let result = await Hotel.find({_id : id});
    res.send(result);
}
const SaveHotels = async(req, res)=>{
    let result = await Hotel.create(req.body);
    res.send({ message : "Data Saved", result : result});
}
const DeleteHotelsById = async(req, res)=>{
    let id = req.params.id;
    let result = await Hotel.deleteMany({_id : id});
    res.send({ message : "Data Deleted", result : result});
}
const UpdateHotelsById = async(req, res)=>{
    let id = req.params.id;
    let result = await Hotel.updateMany({_id : id}, req.body);
    res.send({ message : "Data Updated", result : result});
}



export { 
    UpdateHotelsById, 
    GetAllHotels, 
    GetHotelsById, 
    DeleteHotelsById, 
    SaveHotels 
    
    
};