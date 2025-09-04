import React from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../../config/API'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddTurf = () => {

    let navigate = useNavigate()

    let addTurf = useFormik({
        initialValues : {
            title : "",
            price : "",
            address : "",
            contact : "",
            image : "",
            detail : "",
            timing_open : "",
            timing_close : "",
            lat : "",
            long : ""
        },
        onSubmit : (formData)=>{
            // console.log(formData)
            axios
            .post(`${API_URL}/turf`, formData, { headers : { Authorization : localStorage.getItem("business_access") }})
            .then(response=>{
                // console.log(response.data);
                navigate("/business/myturf")
            })
        }
    })

    let arr = [];
    let demo = ()=>{
        arr=[];
        for(let i=0; i<=23; i++)
        {
            arr.push(<option>{ i<13 ? i : i-12 }:00 {i<12 ? 'AM' : 'PM'} </option>);
        }
        return arr;
    }


  return (
    <>
    <h4>Add Your New Turf</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi in perspiciatis voluptate, omnis ratione, dolores adipisci eos architecto officiis ipsa! Commodi voluptas recusandae sunt eveniet alias nesciunt, maiores doloribus.</p>
    <div className="row">
        <form onSubmit={addTurf.handleSubmit}>
        <div className="col-md-8 offset-md-2">
            <div className="card">
                <div className="card-header bg-dark">
                    <h5 className='text-light'>Add</h5>
                </div>
                <div className="card-body bg-secondary">
                    <div className='my-3'>
                        <label className='text-light'>Turf Title</label>
                        <input name='title' onChange={addTurf.handleChange} type='text' className='form-control' />
                    </div>
                    <div className='my-3'>
                        <label className='text-light'>Price</label>
                        <input name='price' onChange={addTurf.handleChange} type='text' className='form-control' />
                    </div>
                    <div className='my-3'>
                    
                        <label className='text-light'>Contact Number (Manager)</label>
                        <input name='contact' onChange={addTurf.handleChange} type='text' className='form-control' />
                    </div>
                    <div className='my-3'>
                        <label className='text-light'>Turf Detail</label>
                        <textarea name='detail' onChange={addTurf.handleChange} type='text' className='form-control' ></textarea>
                    </div>
                    <div className='my-3'>
                        <label className='text-light'>Address</label>
                        <textarea name='address' onChange={addTurf.handleChange} type='text' className='form-control' ></textarea>
                    </div>
                    <div className='my-3'>
                        <label className='text-light'>Lati and Long</label>
                        <br />
                        <small className='text-light'>If you should be show your turf in the google map, then select your address by Latitude and Longitude from <a href='https://www.latlong.net/' target='_blank' style={{color : "red"}}>here</a> (Optional)</small>
                        <div className="row">
                            <div className="col-md-1">
                                <label className='text-light'>Lati</label>
                            </div>
                            <div className='col-md-5'>
                                <input name='lat' onChange={addTurf.handleChange} type='text' className='form-control' />

                            </div>
                            <div className="col-md-1">
                                <label  className='text-light'>Long</label>
                            </div>
                            <div className='col-md-5'>
                                <input name='long' onChange={addTurf.handleChange} type='text' className='form-control' />

                            </div>
                        </div>
                    </div>

                    <div className='my-3'>
                        <label className='text-light'>Timing</label>
                        <div className='my-2 row'>
                            <div className='col-md-1'>
                                <label className='text-light'>Open</label>
                            </div>
                            <div className='col-md-5'>
                                <select name='timing_open' onChange={addTurf.handleChange} className='form-control'>
                                    {demo()}
                                </select>
                            </div>
                            <div className='col-md-1'>
                                <label className='text-light'>Close</label>
                            </div>
                            <div className='col-md-5'>
                                <select name='timing_close' onChange={addTurf.handleChange} className='form-control'>
                                    {demo()}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-dark">
                    <button type='submit' className='btn btn-light'>Add Turf</button>
                </div>
        
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default AddTurf
/*
    title
    price
    address
    image
    timing 

*/