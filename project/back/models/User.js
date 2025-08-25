import mongoose from '../db/connect.js';

const UserSchema = mongoose.Schema({
    name : String,
    age : Number,
    address : String,
    email : String,
    password : String,
    gender : String,
    contact : String
    
},{timestamps : true})

const User = mongoose.model("user", UserSchema);

export default User;