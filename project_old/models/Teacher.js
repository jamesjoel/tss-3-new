import mongoose from '../db/connect.js'

const TeacherSchema = mongoose.Schema({
    fullname : String,
    class : Number,
    salary : Number,
    gender : String
})

const Teacher = mongoose.model("teacher", TeacherSchema);

export default Teacher;