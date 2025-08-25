import mongoose from '../db/connect.js';

let OrderSchema = mongoose.Schema({
    user_id : { type : mongoose.Schema.Types.ObjectId, ref : 'user' },
    product_id : {type : mongoose.Schema.Types.ObjectId, ref : 'product'}
}, {timestamps : true})

let Order = mongoose.model("order", OrderSchema);

export default Order;