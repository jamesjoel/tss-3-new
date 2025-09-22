import React from 'react'

const Hero = () => {
    return (
        <>
            {/* <!-- Carousel Start --> */}
            <div className="header-carousel owl-carousel " style={{ height: "300px" }}>
                <div className="header-carousel-item " style={{ height: "300px",backgroundColor:"#0f4611" }}>
                    <p className='text-light text-center pt-5 '> Best Turf Booking System</p>
                    <p className='text-center text-light display-5' style={{paddingTop:"7px" ,}}>Book Your Favorite Turf Neare By Your Location</p>
                    <div className='text-center mt-4 '><a className="btn btn-success rounded-pill text-white py-3 px-5" href="#">Book Appointment</a></div>

                </div>

            </div>
            {/* <!-- Carousel End --> */}
        </>
    )
}

export default Hero