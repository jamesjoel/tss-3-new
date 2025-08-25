import * as YUP from 'yup'
let UserSignupSchema = YUP.object({
    name : YUP.string().required("Insert your Full Name"),
    age : YUP.number().typeError("Age should be a Number").required("Insert your Age"),
    address : YUP.string().required("Insert your Address"),
    email :YUP.string().email("Email Id is not valid").required("Insert your Email Id"),
    password : YUP.string().min(8, "Password should be min 8 char").required("Insert your Password"),
    gender : YUP.string().required("Select Your Gender"),
    repassword : YUP.string().oneOf([YUP.ref('password')], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Numbers Only").required("Insert Your Contact Number")
})
export default UserSignupSchema;