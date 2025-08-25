import * as YUP from 'yup'
let UserLoginSchema = YUP.object({
    email : YUP.string().email("Email Id is not Valid").required("Insert Your Valid Email Id"),
    password : YUP.string().required("Insert Your Password")
})

export default UserLoginSchema;