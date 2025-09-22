import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { API_URL } from '../config/Api'
import { useEffect, useState } from 'react'



const Card = () => {
        let [allTurf, setAllTurf] = useState([]);
        useEffect(() => {
            axios.get(`${API_URL}/turf`)
                .then(response => {
                    setAllTurf(response.data)
                })
        }, [])
    



  return (
    <>
                {/* <!-- Blog Start --> */}
            <div className="container-fluid blog py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h4 className="sub-title px-3 mb-0">Our Blog</h4>
                        </div>
                        <h1 className="display-3 mb-4">Excellent Facility and High Quality Therapy</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                    </div>
                    <div className="row g-4 justify-content-center">

                    {
                        allTurf.map(item => {
                            return (
                                <>
                                    <div className="col-md-3 col-lg-3 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="blog-item rounded " >
                                            <div className="blog-img">
                                                {/* <img src={"http://localhost:3000/images/"+item.image} className="img-fluid w-100" alt="Image" style={{height:"250px"}}></img> */}
                                                <img src="http://www.turfpe.in/images/g5.jpg" className="img-fluid w-100" alt="Image" style={{height:"250px"}}></img>
                                            </div>
                                            <div className="blog-centent p-4">
                                                <div className="d-flex justify-content-between mb-4">
                                                    <p className="mb-0 text-muted " ><i className="fa fa-map-marker text-danger" aria-hidden="true" ></i> {item.address}</p>
                                                </div>
                                                <a href="#" className="h5 " style={{width:"100%"}}>{item.title}</a>
                                                <br />
                                                
                                                <h6 className='pt-2 fw'>&#8377;{item?.price != null ? item.price.toFixed(2) : ''}</h6>
                                                <br />
                                                <NavLink to={"/turf/"+item._id} className="btn btn-success btn-sm rounded-pill text-white mt-0 py-2 px-4 mb-1" style={{ fontSize: "12px", marginTop:"0px" }}>BOOK NOW</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }

                </div>
            </div>
            </div>
            {/* <!-- Blog End --> */}
    </>
  )
}

export default Card