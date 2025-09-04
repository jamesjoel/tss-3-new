import React, {useEffect, useState} from 'react'
import Faq from '../components/Faq'
import { NavLink } from 'react-router-dom'
import Testimonial from '../components/Testimonial'
import Slider from '../components/Slider'
import axios from 'axios'
import { API_URL } from '../config/API'


const Home = () => {

  let [allTurf, setAllTurf] = useState([]);

  useEffect(()=>{

    axios.get(`${API_URL}/turf`)
    .then(response=>{
      setAllTurf(response.data);
      console.log("##########");
    })

  },[])

  useEffect(()=>{
    console.log("*****")
  })



  return (
    <>
    <Slider />
    <div style={{marginTop : "100px"}}>
      <section id="blog">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6><span className="text-primary">|</span>Blog</h6>
          <h3 className="display-6 fw-semibold">Recent Posts</h3>
        </div>
        <div>
          <a href="index.html" className="btn btn-primary btn-slide hover-slide-right">
            <span>Read all blogs</span>
          </a>
        </div>
      </div>
      <div className="row mt-5">

         {
          allTurf.map(item=>{
            return(
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div className="card-item">
            <div className="card  mt-4">
              <div className="card-image position-relative">
                {/* <a href="index.html"><img src={"http://localhost:3000/images/"+item.image} alt="post-img" className="post-image img-fluid" style={{height :"250px", width : "100%"}}/></a> */}
                <a href="index.html"><img src="https://www.lawnpop.com/wp-content/uploads/2024/01/playground-turf-a-smart-and-safe-choice-for-your-outdoor-space.jpg" alt="post-img" className="post-image img-fluid" style={{height :"250px", width : "100%"}}/></a>
              </div>
            </div>
            <div className="card-body p-0 mt-2">
              <span className="text-capitalize text-black-50"><i class="fa fa-map-marker" aria-hidden="true"></i> {item.address}</span>
              <a href="index.html">
                <h5 className="mt-2">{item.title}</h5>
              </a>
              <p className='fw-bold'>&#8377; {item.price.toFixed(2)}</p>
              <NavLink to={"/turfs/"+item._id} className='btn btn-success btn-sm'>Book Now</NavLink>
            </div>
          </div>
        </div>
            )
          })
         } 

        


        
      </div>
    </div>
  </section>
    </div> 
  <Faq />
  <Testimonial />
  </>
  )
}

export default Home


/*
  let a = "rohit";

  let b = a + "sharma";

  let b = `${a} sharma`;



*/