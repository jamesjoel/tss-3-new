import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <>
    <div className="col-md-2">
       <div className="alert alert-info">
         <h4 className='fw-bold'>Your Account</h4>
        <ul className=' navbar-nav  '>
          <li className="nav-item">
            <NavLink to='/myaccount' className='nav-link text-dark'>My Account</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='myprofile' className='nav-link text-dark'>My Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/mybooking' className='nav-link text-dark'>My Booking</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/logout' className='nav-link text-dark'>Logout</NavLink>
          </li>
          
        </ul>
       </div>
      </div>
    </>
  )
}

export default UserNavbar