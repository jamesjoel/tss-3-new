import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../../config/API'
import UserSignupSchema from '../../schemas/UserSignupSchema'
import Hero from '../../components/Hero'






const Signup = () => {
    let [type, setType] = useState("password");
    let [passClass, setPassClass] = useState("fa-eye")
    let navigate = useNavigate();
    let SignupFrm = useFormik({
        validationSchema : UserSignupSchema,
        initialValues : {
            name : "",
            age : "",
            address : "",
            email :"",
            password : "",
            gender : "",
            repassword : "",
            contact : ""
        },
        onSubmit : (formData)=>{
            //console.log("**********", formData)
            axios
            .post(`${API_URL}/user`, formData)
            .then(response=>{
                //console.log(response.data);
                navigate("/login");
            })
        }
    })


    let showPass = ()=>{
        if(type=="password"){

            setType("text")
            setPassClass("fa-eye-slash")
        }else{
            
            setType("password")
            setPassClass("fa-eye")
           
        }
    }

  return (
    <>
    <Hero />
    <div className='container my-5'>
        <form onSubmit={SignupFrm.handleSubmit}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header bg-primary'>
                        <h4 className='text-center p-2 text-light'>User Signup</h4>
                    </div>
                    <div className='card-body'>
                        <div className='my-4'>
                            <label>Name</label>
                            <input name='name' onChange={SignupFrm.handleChange} type='text'  placeholder='Name' className={'form-control '+ (SignupFrm.errors.name && SignupFrm.touched.name ? 'is-invalid' : '')} />
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
                            <input name='age' onChange={SignupFrm.handleChange} type='text' placeholder='Age' className={'form-control ' + (SignupFrm.errors.age && SignupFrm.touched.age ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.age && SignupFrm.touched.age
                                ?
                                <small className='text-danger'>{SignupFrm.errors.age}</small>
                                :
                                ''

                            }
                        </div>
                        <div className='my-3'>
                            <label>Address</label>
                            <textarea name='address' onChange={SignupFrm.handleChange} placeholder='Address' className={'form-control ' + (SignupFrm.errors.address && SignupFrm.touched.address ? 'is-invalid' : '')}></textarea>
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
                            <input name='email' onChange={SignupFrm.handleChange} type='text' placeholder='Email' className={'form-control ' + (SignupFrm.errors.email && SignupFrm.touched.email ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.email && SignupFrm.touched.email
                                ?
                                <small className='text-danger'>{SignupFrm.errors.email}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-4'>
                            <label>Password</label>
                            <div className='input-group'>
                            <input name='password' onChange={SignupFrm.handleChange} type={type} placeholder='Password' className={'form-control ' + (SignupFrm.errors.password && SignupFrm.touched.password ? 'is-invalid' : '')} />
                            <button onClick={showPass} class="btn btn-outline-light text-dark btn-sm border-0" type="button" id="button-addon2">
                                {/* <i class="fa fa-eye-slash fa-lg" aria-hidden="true"></i> */}
                                <i class={"fa fa-lg "+passClass} aria-hidden="true"></i>
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
                            <input name='repassword' onChange={SignupFrm.handleChange} type='password' placeholder='Re-Password' className={'form-control ' + (SignupFrm.errors.repassword && SignupFrm.touched.repassword ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.repassword && SignupFrm.touched.repassword
                                ?
                                <small className='text-danger'>{SignupFrm.errors.repassword}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-4'>
                            <label>Gender</label>
                            <br />
                            <input name='gender' value='male' onChange={SignupFrm.handleChange} type='radio' />&nbsp;&nbsp;Male&nbsp;&nbsp;&nbsp;
                            <input name='gender' value='female' onChange={SignupFrm.handleChange} type='radio' />&nbsp;&nbsp;Female
                            <br />
                            
                            {
                                SignupFrm.errors.gender && SignupFrm.touched.gender
                                ?
                                <small className='text-danger'>{SignupFrm.errors.gender}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-4'>
                            <label>Contact Number</label>
                            <input name='contact' onChange={SignupFrm.handleChange} type='text' placeholder='Contact Number' className={'form-control ' + (SignupFrm.errors.contact && SignupFrm.touched.contact ? 'is-invalid' : '')} />
                            {
                                SignupFrm.errors.contact && SignupFrm.touched.contact
                                ?
                                <small className='text-danger'>{SignupFrm.errors.contact}</small>
                                :
                                ''

                            }
                        </div>
                        
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-primary'>Signup</button>
                        <br />
                        <small>If you are already registered <NavLink to="/login">login</NavLink> here</small>
                    </div>
                </div>
            </div>
        </div>
        </form>
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