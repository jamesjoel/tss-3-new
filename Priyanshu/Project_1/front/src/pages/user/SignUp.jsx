import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../../config/Api'
import Hero from '../../components/Hero'
import UserSingupSchema from '../../schema/UserSignupSchema'








const SignUp = () => {

    let [type, setType] = useState("password");
    let [passClass, setPassClass] = useState("fa-eye")

    let navigate = useNavigate();
    let SignupFrm = useFormik({
        validationSchema:UserSingupSchema,
        initialValues: {
            name: "",
            age: "",
            address: "",
            email: "",
            password: "",
            gender: "",
            repassword: "",
            contact: "",
        },
        onSubmit: (formData) => {
            // console.log("*******",formData)
            axios
                .post(`${API_URL}/user`, formData)
                .then(response => {
                    // console.log(response.data)
                    navigate("/login");
                })

        }
    })
    let showPassword = () => {
        if (type == "password") {
            setType("text")
            setPassClass("fa fa-eye-slash")
        }
        else {
            setType("password")
            setPassClass("fa-eye")
        }
    }




    return (
        <>
        <Hero/>
            <div className='container my-4'>
                <form onSubmit={SignupFrm.handleSubmit}>

                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <div className='card '>
                                <div className='card-header bg-success'>
                                    <h4 className='text-center m-1 text-light'>User Register</h4>
                                </div>
                                <div className='card-body'>
                                    <div className='my-4'>
                                        <label>Name</label>
                                        <input name='name' onChange={SignupFrm.handleChange} type="text" placeholder='Name ' className={'form-control '+(SignupFrm.errors.name && SignupFrm.touched.name ? 'is-invalid' : '') }/>
                                        {
                                            SignupFrm.errors.name && SignupFrm.touched.name
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.name}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Age</label>
                                        <input name='age' onChange={SignupFrm.handleChange} type="text" placeholder='Age' className={'form-control '+(SignupFrm.errors.age && SignupFrm.touched.age ? 'is-invalid' : ' ') }/>
                                        {
                                            SignupFrm.errors.age && SignupFrm.touched.name
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.age}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Address</label>
                                        <textarea name='address' onChange={SignupFrm.handleChange} placeholder='Address' className={'form-control '+(SignupFrm.errors.address && SignupFrm.touched.address ? 'is-invalid' : '')}></textarea>

                                        {
                                            SignupFrm.errors.address && SignupFrm.touched.address
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.address}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Email</label>
                                        <input name='email' onChange={SignupFrm.handleChange} type="text" placeholder='Email' className={'form-control '+(SignupFrm.errors.email && SignupFrm.touched.email ? 'is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.email && SignupFrm.touched.address
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.email}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Password</label>
                                        <div className='input-group'>
                                            <input name='password' onChange={SignupFrm.handleChange} type={type} placeholder='Password' className={'form-control '+(SignupFrm.errors.password && SignupFrm.touched.password ? 'is-invalid' : '')} />
                                            <button onClick={showPassword} type="button" className='border-0 btn-outline-light text-dark'>
                                                <i className={"fa fa-lg " + passClass} aria-hidden="true"></i>
                                            </button>
                                        </div>
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
                                    <div className='my-4'>
                                        <label>Contact Number</label>
                                        <input name='contact' onChange={SignupFrm.handleChange} type="text" placeholder='Contact Number' className={'form-control '+(SignupFrm.errors.contact && SignupFrm.touched.contact ? 'is-invalid' : '')} />
                                         {
                                            SignupFrm.errors.contact && SignupFrm.touched.contact
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.contact}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className='my-4'>
                                        <label>Gender</label>
                                        <br />
                                        <input name='gender' onChange={SignupFrm.handleChange} value='male' type="radio" />&nbsp;&nbsp;&nbsp;male &nbsp;&nbsp;
                                        <input name='gender' onChange={SignupFrm.handleChange} value='female' type="radio" />&nbsp;&nbsp;&nbsp;female
                                         <br />
                                         {
                                            SignupFrm.errors.password && SignupFrm.touched.password
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.password}</small>
                                            :
                                            ''
                                        }
                                    </div>

                                </div>
                                <div className='card-footer text-center '>
                                    <button type='submit' className='btn btn-success px-5'>Sign-Up</button>
                                    <br />
                                    <small>If you are alredy register <NavLink to='/login'>login</NavLink> here</small>
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