import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Hero from '../../components/Hero'
import BusinessLoginSchema from '../../schemas/BusinessLoginSchema'
import {useFormik} from 'formik'
import axios from 'axios'
import {API_URL} from '../../config/API';

const Login = () => {

    let navigate = useNavigate();

     let [errMsg, setErrMsg] = useState("");
     let LoginFrm = useFormik({
        validationSchema : BusinessLoginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (formData)=>{
            axios
            .post(`${API_URL}/business/auth`, formData)
            .then(response=>{
                if(response.data.success==true)
                {
                    localStorage.setItem("business_access", response.data.token);
                    localStorage.setItem("business_name", response.data.name);
                    navigate("/business/myaccount");
                }
                else{
                    if(response.data.errType==1){
                        setErrMsg("This Email Id and Password is Incorrect")
                    }
                    if(response.data.errType==2){
                        
                        setErrMsg("This Password is Incorrect")
                    }
                }
            })
        }

     });
   
  return (
    <>
     <Hero />
    <div className='container my-5'>
        <div className='row'>
            <form onSubmit={LoginFrm.handleSubmit}>
            <div className='col-md-6 offset-md-3'>
            
                <div className='card'>
                    <div className='card-header bg-primary'>
                        <h4 className='text-center p-2 text-light'>Turf Owner Login</h4>
                    </div>
                    <div className='card-body'>
                        <div className='my-3'>
                            <label>Email</label>
                            <input name='email' onChange={LoginFrm.handleChange} type='text' placeholder='Email' className={'form-control ' + (LoginFrm.errors.email && LoginFrm.touched.email ? 'is-invalid' : '' )} />
                            {
                                LoginFrm.errors.email && LoginFrm.touched.email
                                ?
                                <small className='text-danger'>{LoginFrm.errors.email}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>Password</label>
                            <input name='password' onChange={LoginFrm.handleChange} type='password' placeholder='Password' className={'form-control ' + (LoginFrm.errors.password && LoginFrm.touched.password ? 'is-invalid' : '')} />
                            {
                                LoginFrm.errors.password && LoginFrm.touched.password
                                ?
                                <small className='text-danger'>{LoginFrm.errors.password}</small>
                                :
                                ''
                            }
                            <div style={{float : "right"}}>
                            <small><NavLink to="/">Forgot Password</NavLink></small>

                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <p className='text-danger text-center'>{errMsg}</p>
                        <button type='submit' className='btn btn-primary'>Login</button>
                        <br />
                        <small>If you are new here then <NavLink to="/business/signup">signup</NavLink> first</small>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>

</>
  )
}

export default Login

/*

npm install yup

Validation 
    1.  required
    2.  email 
    3.  password, re-passwrod match, 
    4.  contact number


a. import * as YUP from 'yup'
b. const Demo = YUP.object({

    name : YUP.string().required("")

})

*/