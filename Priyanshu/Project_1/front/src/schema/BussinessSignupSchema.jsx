import * as YUP from 'yup'


let BussinessSingupSchema = YUP.object({
    name: YUP.string().required("insert your name"),
    email: YUP.string().typeError("email is not valid").required("insert your email "),
    password: YUP.string().min(4, "password should be min 4 char").required("insert your password"),
    repassword: YUP.string().oneOf([YUP.ref('password')], "password and re-password should be same").required("insert your password"),
    contact: YUP.number().typeError("insert your number").required("insert your contact number")
})

export default BussinessSingupSchema;


