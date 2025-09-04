import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <>
    <div className='col-md-2'>
            <div className='alert alert-info'>
              <h5>Your Account</h5>
            <ul className='nav' >
              <li className='nav-item'>
                <NavLink to="/myaccount" className='nav-link'>My Account</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/myprofile" className='nav-link'>My Profile</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/mybooking" className='nav-link'>My Booking</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/logout" className='nav-link'>Logout</NavLink>
              </li>
            </ul>
            </div>
          </div>
    </>
  )
}

export default UserNavbar