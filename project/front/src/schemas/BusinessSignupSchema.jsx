import * as YUP from 'yup'
let BusinessSignupSchema = YUP.object({
    name : YUP.string().required("Insert Your Name"),
    email : YUP.string().email("The Email Id is Incorrect").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Password"),
    repassword : YUP.string().oneOf([YUP.ref("password")], "The Password and Re-Password should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Numbers Only").required("Insert Your Contact Number"),
})

export default BusinessSignupSchema
