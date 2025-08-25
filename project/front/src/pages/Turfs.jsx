import React from 'react'
import Hero from '../components/Hero'

const Turfs = () => {
  return (
    <>
    <Hero />
    <div className="container my-5">
        <div className="row">
            <div className="col-md-8">
                <h3>Club 19</h3>
                <p>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;AB. Road, Indore
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic dolor tempora iste maiores laborum, praesentium sed totam ex ut voluptatum dolorum nesciunt! Vel ipsum dignissimos aliquam. Perferendis, deserunt rerum!</p>
                <h4 className='h4 mt-5'>Gallery</h4>
                <img src='http://localhost:3000/images/2.jpg' style={{width : "100%", height : "450px"}} />
            </div>
            
            
            
            <div className="col-md-4">
                <h3>Book Your Appointment</h3>
                <div className='card my-5'>
                    <div className='card-header'>
                        Booking Date
                    </div>
                    <div className="card-body">
                        <input type='text' className='form-control'/>
                    </div>
                </div>
                <div className='card my-5'>
                    <div className='card-header'>
                        Booking Timing
                    </div>
                    <div className="card-body">
                        <input type='text' className='form-control'/>
                    </div>
                </div>
                <div className='card my-5'>
                    <div className='card-header'>
                        Price
                    </div>
                    <div className="card-body">
                        &#8377; 2400.00
                    </div>
                </div>
                <button className='btn btn-primary'>Book Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Turfs