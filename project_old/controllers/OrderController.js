import Order from '../models/Order.js';

let GetAllOrder = async(req, res)=>{
    let result = await Order.find().populate("user_id").populate("product_id").exec();
    // let result = await Order.find();
    res.send(result);
}

let SaveOrder = async(req, res)=>{
    await Order.create(req.body);
    res.send({message : "Data Saved"});
}

export {GetAllOrder, SaveOrder}