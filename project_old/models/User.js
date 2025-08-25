import mongoose from "../db/connect.js";

let UserSchema = mongoose.Schema({
    name : String,
    email : String,
    contact : String
})

let User = mongoose.model("user", UserSchema);

export default User;