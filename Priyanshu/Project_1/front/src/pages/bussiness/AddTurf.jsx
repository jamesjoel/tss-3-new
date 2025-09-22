import React from 'react'
import { useFormik } from 'formik';
import { API_URL } from '../../config/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddTurf = () => {
    let navigate = useNavigate()
    let addTurf = useFormik({
        initialValues: {
            title: "",
            price: "",
            address: "",
            contact: "",
            image: "",
            detail: "",
            timing_open: "",
            timing_close: "",
            lat: "",
            long: ""
        },onSubmit : (formData)=>{
            // console.log(formData)
            axios
            .post(`${API_URL}/turf`,formData,{headers:{Authorization:localStorage.getItem("bussiness_access")}})
            .then(response=>{
                // console.log(response.data)
                navigate("/bussiness/myturf")

            })

            
        }
    })





    let arr = [];
    let timeingslote = () => {
        arr = [];        //ye line arr ko khali karegi kyuki ham iska do jgh use kar rhe he to 1st bar me isme kuch value hogi iss liye ise khsli karna padega
        for (let i = 0; i <= 23; i++) {
            arr.push(<option>{i < 13 ? i : i - 12}:00 {i < 12 ? 'AM' : 'PM'}</option>);
        }
        return arr;
    }
    return (
        <>
            <h4 className='fw-bold'>Add New Turf</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere repellendus sapiente, asperiores, illo molestiae totam reiciendis laborum quo architecto consequatur modi corrupti assumenda tenetur impedit esse? Nemo, nesciunt doloribus.</p>
            <div className="row">
                <form onSubmit={addTurf.handleSubmit} >

                    <div className="col-md-8 offset-md-1">
                        <div className="card m-3">

                            <div className="card-header " style={{ backgroundColor: "gray" }}>
                                <h5 className='text-light'>Add</h5>
                            </div>
                            <div className="card-body " style={{ backgroundColor: "#140F0E" }}>
                                <div className="my-3">
                                    <label className='text-light' > Tuff Title</label>
                                    <input name='title' onChange={addTurf.handleChange} type="text " className='form-control' />
                                </div>
                                <div className="my-3">
                                    <label className='text-light' > Tuff Price</label>
                                    <input name='price' onChange={addTurf.handleChange} type="text " className='form-control' />
                                </div>
                                <div className="my-3">
                                    <label className='text-light' >Contact Number</label>
                                    <input name='contact' onChange={addTurf.handleChange} type="text " className='form-control' />
                                </div>
                                <div className="my-3">
                                    <label className='text-light' >Turf Detail</label>
                                    <textarea name='detail' onChange={addTurf.handleChange} type="text" className='form-control' > </textarea>
                                </div>
                                <div className="my-3">

                                    <label className='text-light' >Address</label>
                                    <textarea name='address' onChange={addTurf.handleChange} type="text" className='form-control' > </textarea>
                                </div>
                                <div className="my-3">

                                    <label className='text-light' >Lati and Longi</label>
                                    <br />
                                    <small className='text-light'>If you want to show your turf in the google map then slect your address by Latitude and Longitude from <a href="http://www.latlong.net/" target='_blank' style={{ color: "red" }}>here</a>(Optional)</small>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <label className='text-light'>Lat</label>

                                        </div>
                                        <div className="col-md-5">
                                            <input name='lat' onChange={addTurf.handleChange} type="text" className='form-control' />
                                        </div>
                                        <div className="col-md-1">
                                            <label className='text-light'>Long</label>

                                        </div>
                                        <div className="col-md-5">
                                            <input name='long' onChange={addTurf.handleChange} type="text" className='form-control' />
                                        </div>
                                    </div>
                                </div>

                                <div className="my-3">
                                    <label className='text-light' > Timeing </label>
                                    <div className=" my-2 row">
                                        <div className="col-md-1">
                                            <label className='text-light' >Open</label>
                                        </div>
                                        <div className="col-md-5">
                                            <select name='timing_open' onChange={addTurf.handleChange} className='form-control text-dark'>
                                                {timeingslote()}
                                            </select>
                                        </div>
                                        <div className="col-md-1">
                                            <label className='text-light' >Close</label>

                                        </div>
                                        <div className="col-md-5">
                                            <select name='timing_close' onChange={addTurf.handleChange} className='form-control text-dark'>
                                                {timeingslote()}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <button type='submit' className='btn btn-light text-light ' style={{ backgroundColor: "gray" }} >Add Turf</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default AddTurf