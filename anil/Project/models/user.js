import mongoose from "../db/connect.js";

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

let user = mongoose.model("user", userSchema);

export default user;