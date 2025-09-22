import * as YUP from 'yup'

let BussinessLoginSchema = YUP.object({
    email:YUP.string().email("email id is not valid").required("insert your valid email id"),
    password:YUP.string().required("insert your password")
})


export default BussinessLoginSchema ;
