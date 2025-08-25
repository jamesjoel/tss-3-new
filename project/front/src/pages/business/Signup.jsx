import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'

import axios from 'axios'
import {API_URL} from '../../config/API';
import BusinessSignupSchema from '../../schemas/BusinessSignupSchema';
import Hero from '../../components/Hero';



const Signup = () => {
    
    let navigate = useNavigate();
    let SignupFrm = useFormik({
        validationSchema : BusinessSignupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            repassword : "",
            contact : ""
        },
        onSubmit : (formData)=>{
            // console.log(formData)
            axios
            .post(`${API_URL}/business`, formData)
            .then(response=>{
                navigate("/business/login")
            })
        }
    })



  return (
    <>
    <Hero />
    <div className='container my-5'>
  
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <form onSubmit={SignupFrm.handleSubmit}>
                <div className='card'>
                    <div className='card-header bg-primary'>
                        <h4 className='text-center p-2 text-light'>Turf Owner Signup</h4>
                    </div>
                   <div className='card-body'>
                        <div className='my-3'>
                            <label>Owner Name</label>
                            <input name='name' onChange={SignupFrm.handleChange} type='text' placeholder='Owner Name' className={'form-control '+ (SignupFrm.errors.name && SignupFrm.touched.name ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.name && SignupFrm.touched.name
                                ?
                                <small className='text-danger'>{SignupFrm.errors.name}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-3'>
                            <label>Email/Username</label>
                            <input name='email' onChange={SignupFrm.handleChange} type='text' placeholder='Email/Username' className={'form-control '+ (SignupFrm.errors.email && SignupFrm.touched.email ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.email && SignupFrm.touched.email
                                ?
                                <small className='text-danger'>{SignupFrm.errors.email}</small>
                                :
                                ''
                            }
                        </div>
                         <div className='my-3'>
                            <label>Contact</label>
                            <input name='contact' onChange={SignupFrm.handleChange} type='text' placeholder='Contact'  className={'form-control '+ (SignupFrm.errors.contact && SignupFrm.touched.contact ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.contact && SignupFrm.touched.contact
                                ?
                                <small className='text-danger'>{SignupFrm.errors.contact}</small>
                                :
                                ''
                            }
                        </div>
                         <div className='my-3'>
                            <label>Password</label>
                            <input name='password' onChange={SignupFrm.handleChange} type='password' placeholder='Password'  className={'form-control '+ (SignupFrm.errors.password && SignupFrm.touched.password ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.password && SignupFrm.touched.password
                                ?
                                <small className='text-danger'>{SignupFrm.errors.password}</small>
                                :
                                ''
                            }
                        </div>
                         <div className='my-3'>
                            <label>Re-Password</label>
                            <input name='repassword' onChange={SignupFrm.handleChange} type='password' placeholder='Re-Password'  className={'form-control '+ (SignupFrm.errors.repassword && SignupFrm.touched.repassword ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.repassword && SignupFrm.touched.repassword
                                ?
                                <small className='text-danger'>{SignupFrm.errors.repassword}</small>
                                :
                                ''
                            }
                        </div>
                   </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-primary'>Signup</button>
                        <br />
                        <small>If you are already registered <NavLink to="/business/login">login</NavLink> here</small>
                    </div>
                </div>
                </form>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Signup

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