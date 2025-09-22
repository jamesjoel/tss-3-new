import React from 'react'
import { NavLink } from 'react-router-dom'

const BussinessNavbar = () => {
  return (
     <div className="col-md-2 ">
       <div className="alert alert-primary">
         <h4 className='fw-bold'>B-S Account</h4>
        <ul className=' navbar-nav  '>
          <li className="nav-item">
            <NavLink to='/bussiness/myaccount' className='nav-link text-dark'> My Account</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/bussiness/myturf' className='nav-link text-dark'>My Turf</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/bussiness/addturf' className='nav-link text-dark'>Add Turf</NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink to='/bussiness/logout' className='nav-link text-dark'>Logout</NavLink>
          </li>
          
        </ul>
       </div>
      </div>
  )
}

export default BussinessNavbar