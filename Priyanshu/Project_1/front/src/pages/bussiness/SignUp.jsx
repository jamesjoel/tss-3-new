import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../../config/Api'
import BussinessSingupSchema from '../../schema/BussinessSignupSchema'
import Hero from '../../components/Hero'




const SignUp = () => {



    let navigate = useNavigate();
    let SignupFrm = useFormik({
        validationSchema: BussinessSingupSchema,
        initialValues: {
            name: "",
            email: "",
            password: "",
            repassword: "",
            contact: "",
        },
        onSubmit: (formData) => {
            // console.log(formData)
            axios
            .post(`${API_URL}/bussiness`,formData)
            .then(response=>{
                navigate("/bussiness/login")
            })
        }

    })





    return (
        <>
        <Hero/>
            <div className='container ' style={{marginTop:"25px", marginBottom:"50px" }}>
                <form onSubmit={SignupFrm.handleSubmit} >

                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <div className='card '>
                                <div className='card-header bg-success'>
                                    <h4 className='text-center m-1 text-light'>Turf Owner SingUp</h4>
                                </div>
                                <div className="card-body">
                                    <div className='my-4'>
                                        <label>Owner Name</label>
                                        <input name='name' onChange={SignupFrm.handleChange} type="text" placeholder='Owner Name' className={'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? 'is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.name && SignupFrm.touched.name
                                                ?
                                                <small className='text-danger'>{SignupFrm.errors.name}</small>
                                                :
                                                ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Email/Username</label>
                                        <input name='email' onChange={SignupFrm.handleChange} type="text" placeholder='Email/Username' className={'form-control ' + (SignupFrm.errors.email && SignupFrm.touched.email ? 'is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.email && SignupFrm.touched.email
                                                ?
                                                <small className='text-danger'>{SignupFrm.errors.email}</small>
                                                :
                                                ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Contact Number</label>
                                        <input name='contact' onChange={SignupFrm.handleChange} type="text" placeholder='Contact Number' className={'form-control ' + (SignupFrm.errors.contact && SignupFrm.touched.contact ? 'is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.contact && SignupFrm.touched.contact
                                                ?
                                                <small className='text-danger'>{SignupFrm.errors.contact}</small>
                                                :
                                                ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Password</label>
                                        <input name='password' onChange={SignupFrm.handleChange} type="password" placeholder='Password' className={'form-control ' + (SignupFrm.errors.password && SignupFrm.touched.password ? 'is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.password && SignupFrm.touched.password
                                                ?
                                                <small className='text-danger'>{SignupFrm.errors.password}</small>
                                                :
                                                ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Re-Password</label>
                                        <input name='repassword' onChange={SignupFrm.handleChange} type="password" placeholder='Re-Password' className={'form-control '+(SignupFrm.errors.repassword && SignupFrm.touched.repassword ? 'is-invalid' : '')} />
                                         {
                                            SignupFrm.errors.repassword && SignupFrm.touched.repassword
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.repassword}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                </div>

                                <div className='card-footer text-center '>
                                    <button type='submit' className='btn btn-success px-5'>Sign-Up</button>
                                    <br />
                                    <small>If you are alredy register <NavLink to='/bussiness/login'>login</NavLink> here</small>
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