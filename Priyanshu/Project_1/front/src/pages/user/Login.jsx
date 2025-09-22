import React from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import Hero from '../../components/Hero'
import { useFormik } from 'formik'
import UserLoginSchema from '../../schema/UserLoginSchema'
import axios from 'axios'
import { API_URL } from '../../config/Api'
import { useState } from 'react'

const Login = () => {
    let navigate = useNavigate();

    let [errMsg,setErrMsg] = useState("")

    let LoginFrm = useFormik({
        validationSchema: UserLoginSchema,
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (formData) => {
            axios
                .post(`${API_URL}/user/auth`, formData)
                .then(response => {
                    if(response.data.success == true)
                    {
                        localStorage.setItem("user_access",response.data.token);
                        localStorage.setItem("name",response.data.name);
                        navigate("/myaccount");  
                    }
                    if(response.data.success ==false && response.data.errType==1){

                        setErrMsg("this email id and password is not registerd")
                    }
                    if(response.data.success ==false && response.data.errType==2){

                        setErrMsg("the password is in-correct")
                    }
                })
        }
    })


    return (
        <>
            <Hero />

            <div className='container my-4'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <form onSubmit={LoginFrm.handleSubmit}>
                            <div className='card '>
                                <div className='card-header bg-success'>
                                    <h4 className='text-center m-1 text-light'>User Login</h4>
                                </div>
                                <div className='card-body'>
                                    <div className='my-4'>
                                        <label>Email</label>
                                        <input name='email' onChange={LoginFrm.handleChange} type="text" placeholder='Email' className={'form-control ' + (LoginFrm.errors.email && LoginFrm.touched.email ? 'is-invalid' : '')} />
                                        {
                                            LoginFrm.errors.email && LoginFrm.touched.email
                                                ?
                                                <small className='text-danger'>{LoginFrm.errors.email}</small>
                                                :
                                                ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Password</label>
                                        <input name='password' onChange={LoginFrm.handleChange} type="password" placeholder='Password'  className={'form-control '+(LoginFrm.errors.password && LoginFrm.touched.password ? 'is-invalid' : '')} />
                                        {
                                            LoginFrm.errors.password && LoginFrm.touched.password
                                                ?
                                                <small className='text-danger'>{LoginFrm.errors.password}</small>
                                                :
                                                ''
                                        }
                                        <div style={{ float: "right" }}>
                                            <small><NavLink to='/'>Forgot Password</NavLink></small>

                                        </div>
                                    </div>


                                </div>
                                <div className='card-footer text-center '>
                                    <p className='text-danger text-center'>{errMsg}</p>
                                    <button type='submit' className='btn btn-success px-5'>Login</button>
                                    <br />
                                    <small>If you are here then <NavLink to='/signup'>sign-up</NavLink></small>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login