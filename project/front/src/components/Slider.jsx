import React from 'react'

const Slider = () => {
  return (
     <section id="billboard">
    <div className="row align-items-center g-0 bg-secondary">
      <div className="col-lg-6">
        <div className="m-4 p-4 m-lg-5 p-lg-5">
          <h6 className="text-white"><span className="text-primary">#</span>1 Best HVAC Services</h6>
          <h2 className="display-4 fw-bold text-white my-4">Air duct cleaning, AC cleaning & Home Maintainance</h2>
          <ul className="info d-flex flex-wrap align-items-center list-unstyled">
            <li className="fw-medium text-white d-flex align-items-center me-4">
              <svg className="text-primary me-1" width="20" height="20">
                <use xlinkHref="#check-circle"></use>
              </svg> Servicing
            </li>
            <li className="fw-medium text-white d-flex align-items-center me-4">
              <svg className="text-primary me-1" width="20" height="20">
                <use xlinkHref="#check-circle"></use>
              </svg> Repairs
            </li>
            <li className="fw-medium text-white d-flex align-items-center me-4">
              <svg className="text-primary me-1" width="20" height="20">
                <use xlinkHref="#check-circle"></use>
              </svg> Installation
            </li>
          </ul>
          <a href="index.html" className="btn btn-light btn-bg btn-slide hover-slide-right mt-4">
            <span>Book Appointment</span>
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <img src="images/turfs.jpg" alt="img" className="img-fluid"/>
      </div>
    </div>
  </section>
  )
}

export default Slider