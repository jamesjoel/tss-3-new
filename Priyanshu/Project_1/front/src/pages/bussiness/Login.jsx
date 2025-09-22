import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Hero from '../../components/Hero'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../../config/Api'
import BussinessLoginSchema from '../../schema/BussinessLoginSchema'


const SignUp = () => {



    let navigate = useNavigate();

    let [errMsg,setErrMsg]=useState("")


    let BussLoginFrm = useFormik({


        validationSchema : BussinessLoginSchema,
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (formData) => {
            axios
                .post(`${API_URL}/bussiness/auth`, formData)
                .then(response => {

                    if(response.data.success == true){
                          localStorage.setItem("bussiness_access",response.data.token);
                        localStorage.setItem("bussiness_name",response.data.name);
                        navigate("/bussiness/myaccount"); 
                    }
                    if (response.data.success == false && response.data.errType == 1) {

                        setErrMsg("this email id and password is not registerd")
                    }
                    if (response.data.success == false && response.data.errType == 2) {

                        setErrMsg("the password is in-correct")
                    }
                })
        }
    })




    return (
        <>
            <Hero />

            <div className='container my-4'>
                <form onSubmit={BussLoginFrm.handleSubmit} >
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='card '>
                            <div className='card-header bg-success'>
                                <h4 className='text-center m-1 text-light'>Turf Owner Login</h4>
                            </div>
                            <div className='card-body'>
                                <div className="my-4">
                                    <label>Email</label>
                                    <input name='email' onChange={BussLoginFrm.handleChange}  type="text" placeholder='Email' className={'form-control ' +(BussLoginFrm.errors.email && BussLoginFrm.touched.email ?'is-invalid' : '')} />
                                    {
                                        BussLoginFrm.errors.email && BussLoginFrm.touched.email 
                                        ?
                                        <small className='text-danger'>{BussLoginFrm.errors.email}</small>
                                        :
                                        ''
                                    }
                                </div>
                                 <div className='my-4'>
                                        <label>Password</label>
                                        <input name='password' onChange={BussLoginFrm.handleChange} type="password" placeholder='Password'  className={'form-control '+(BussLoginFrm.errors.password && BussLoginFrm.touched.password ? 'is-invalid' : '')} />
                                        {
                                            BussLoginFrm.errors.password && BussLoginFrm.touched.password
                                                ?
                                                <small className='text-danger'>{BussLoginFrm.errors.password}</small>
                                                :
                                                ''
                                        }
                                </div>
                            </div>

                            <div className='card-footer text-center '>
                                <p className='text-danger text-center'>{errMsg}</p>
                                <button type='submit' className='btn btn-success px-5'>Login</button>
                                <br />
                                <small>If you are not register <NavLink to='/bussiness/signup'>SignUp</NavLink> here</small>
                            </div>
                        </div>
                    </div>
                </div>
                </form>

            </div>
        </>
    )
}

export default SignUp