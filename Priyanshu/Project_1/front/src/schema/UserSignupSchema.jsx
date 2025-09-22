import * as YUP from 'yup'




let UserSingupSchema = YUP.object({
    name: YUP.string().required("insert your name"),
    age: YUP.number().typeError("Age should be a Number").required("insert your age"),
    address: YUP.string().required("insert your address"),
    email: YUP.string().email("Email is not valid").required("insert your email"),
    password:YUP.string().min(4,"password should be min 4 char").required("insert your password"),
    gender:YUP.string().required("insert your gender"),
    repassword:YUP.string().oneOf([YUP.ref('password')], "Password and Re-password should be same").required("insert your repassword"),
    contact:YUP.number().typeError("insert number only").required("insert your contact number"),
})



export default UserSingupSchema;