import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
    <nav className="header-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <a className="navbar-brand" href="index.html">
            <img src="/images/main-logo.png" className="logo img-fluid" />
          </a>
          <ul className="info d-flex flex-wrap justify-content-end align-items-center list-unstyled m-0">
            <li className="time text-black fw-medium text-capitalize d-flex align-items-center ms-4">
              {
                localStorage.getItem("user_access")
                ?
                <span style={{border : "1px solid #1C352D", padding : "5px 10px", borderRadius : "5px"}}>{localStorage.getItem("name")}</span>
                :
                ''
              }
            </li>
            <li className="phone text-black fw-medium text-capitalize d-flex align-items-center ms-4">
             call: 666 333 9999
            </li>
            <li className="time text-black fw-medium text-capitalize d-flex align-items-center ms-4">
             8:00-18:00, Sat: Closed
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <hr className="m-0"/>
    <nav id="primary-header" className="navbar navbar-expand-lg py-3">
      <div className="container justify-content-end">
        <button className="navbar-toggler d-flex d-lg-none justify-content-end border-0 shadow-none p-0" type="button"
          data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false">
          <svg className="navbar-icon" width="60" height="60">
            <use xlinkHref="#navbar-icon"></use>
          </svg>
        </button>
        <div className="header-bottom offcanvas offcanvas-end" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
          <div className="offcanvas-header px-4 mt-3 mb-1">
            <button type="button" className="btn-close btn-close-black shadow-none" data-bs-dismiss="offcanvas"
              aria-label="Close" data-bs-target="#bdNavbar"></button>
          </div>
          <div className="offcanvas-body align-items-center justify-content-center">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item px-3 py-1 py-lg-0">
                <NavLink className="nav-link p-0" aria-current="page" to="/">Home</NavLink>
              </li>

              {
                localStorage.getItem("business_access")
                ?
                <li className="nav-item px-3 py-1 py-lg-0 dropdown">
                <a className="nav-link p-0 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                  aria-expanded="false">{localStorage.getItem("business_name")}</a>
                <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                  <li><NavLink to="/business/login" className="dropdown-item">My Turfs </NavLink>
                  </li>
                  <li><NavLink to="/business/signup" className="dropdown-item">My Booking </NavLink>
                  </li>
                  <li><NavLink to="/business/logout" className="dropdown-item">Logout </NavLink>
                  </li>
                  
                </ul>
              </li>
              :
              <li className="nav-item px-3 py-1 py-lg-0 dropdown">
                <a className="nav-link p-0 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                  aria-expanded="false">Business</a>
                <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                  <li><NavLink to="/business/login" className="dropdown-item">Login </NavLink>
                  </li>
                  <li><NavLink to="/business/signup" className="dropdown-item">Register </NavLink>
                  </li>
                  
                </ul>
              </li>

              }
              



              <li className="nav-item px-3 py-1 py-lg-0">
                <NavLink className="nav-link p-0" to="/about">About</NavLink>
              </li>

              {
                localStorage.getItem("user_access")
                ?
                <>
                 <li className="nav-item px-3 py-1 py-lg-0">
                <NavLink className="nav-link p-0" to="/myaccount">My Account</NavLink>
              </li>
              <li className="nav-item px-3 py-1 py-lg-0">
                <NavLink className="nav-link p-0" to="/logout">Logout</NavLink>
              </li>
                </>
                :
                <>
                 <li className="nav-item px-3 py-1 py-lg-0">
                <NavLink className="nav-link p-0" to="/login">Login</NavLink>
              </li>
              <li className="nav-item px-3 py-1 py-lg-0">
                <NavLink className="nav-link p-0" to="/signup">Signup</NavLink>
              </li>
                </>
              }

             
              
              
            </ul>
              
          </div>
            

            
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header