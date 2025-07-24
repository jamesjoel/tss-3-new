import mongoose from '../db/connect.js';

const StuSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    gender: String,
    fee: Number
})

const Student = mongoose.model('student', StuSchema);
export default Student;