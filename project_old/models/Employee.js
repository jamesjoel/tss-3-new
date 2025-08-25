import mongoose from '../db/connect.js';

let EmpSchema = mongoose.Schema({
    fullname : String,
    salary : Number,
    department : String 
})

let Emp = mongoose.model("employee", EmpSchema);

export default Emp;