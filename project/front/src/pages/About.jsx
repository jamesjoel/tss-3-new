import React, { useState } from 'react'

const About = () => {


  let [info, setInfo] = useState({
    name : "",
    email : "",
    contact : ""
  })


  let demo = ()=>{
    console.log(info)
  }
 

  return (
    <section id="about-us" style={{marginTop : "80px", marginBottom : "80px"}}>
      <input type='text' value={info.name} onChange={(event)=>setInfo({...info, name : event.target.value})} placeholder='Name' />
      <br />
      <input type='text' value={info.email} onChange={(event)=>setInfo({...info, email : event.target.value})} placeholder='Email' />
      <br />
      <input type='text' value={info.contact} onChange={(event)=>setInfo({...info, contact : event.target.value})} placeholder='Contact' />
      <br />
      <button onClick={demo}>OK</button>
    {/* <div className="container">
      <div className="row g-md-5 align-items-center">
        <div className="col-lg-5">
          <div className="imageblock position-relative">
            <img className="img-fluid" src="images/about.png" alt="img"/>
            <div className="video-player position-absolute top-50 start-50 translate-middle">
              <a type="button" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/W_tIumKa8VY"
                data-bs-target="#myModal" className="play-btn position-relative">
                <svg className="play-icon text-primary my-3" width="80" height="80">
                  <use xlinkHref="#play-button"></use>
                </svg>
            </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 mt-5">
          <h6><span className="text-primary">|</span>About Us</h6>
          <h3 className="display-6 fw-semibold mb-4">We are HVAC Service Professional</h3>
          <p>Welcome to our HVAC Agency, where comfort meets efficiency! We take pride in being a leading provider of
            <span className="fw-semibold ">heating, ventilation, and air conditioning (HVAC)</span> solutions for
            residential, commercial, and industrial clients. Our team of dedicated professionals is committed to
            delivering top-notch services, indoor environment remains comfortable.
          </p>
          <p className="fw-semibold m-0">Our Mission</p>
          <p>At our HVAC Agency, our mission is to create comfortable, healthy, and energy-efficient spaces for our
            valued customers. We strive to enhance your quality of life by delivering reliable HVAC services tailored to
            your specific needs. Whether it's installing cutting-edge HVAC systems, conducting routine maintenance, or
            providing swift repairs, we are your trusted partner.</p>
          <a href="index.html" className="btn btn-primary btn-slide hover-slide-right mt-4">
            <span>More About us</span>
          </a>
        </div>
      </div>
    </div> */}
  </section>
  )
}

export default About