import mongoose from '../db/connect.js';

let UserSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    department : String,
    salary : Number
})

let User = mongoose.model("user", UserSchema);
export default User;