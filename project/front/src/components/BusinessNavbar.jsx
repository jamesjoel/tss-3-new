import React from 'react'
import { NavLink } from 'react-router-dom'

const BusinessNavbar = () => {
  return (
    <div className="col-md-2">
                <div className="alert alert-info">
                    <h5>B-Account</h5>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <NavLink to='/business/myaccount' className='nav-link'>My Account</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/business/myturf' className='nav-link'>My Turfs</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/business/addturf' className='nav-link'>Add Turfs</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/business/logout' className='nav-link'>Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
  )
}

export default BusinessNavbar