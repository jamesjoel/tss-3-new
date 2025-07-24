import mongoose from '../db/Connect.js';

const StuSchema = mongoose.Schema({
    name : String,
    age : Number,
    gender  : String,
    city : String
})

const Student = mongoose.model("student",StuSchema);

export default Student;
