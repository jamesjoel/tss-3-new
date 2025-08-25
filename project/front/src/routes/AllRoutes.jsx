import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/users/Login'
import Signup from '../pages/users/Signup'
import BusinessSignup from '../pages/business/Signup'
import BusinessLogin from '../pages/business/Login'
import BusinessLogout from '../pages/business/Logout'
import Turfs from '../pages/Turfs'
import Logout from '../pages/users/Logout'

import MyAccount from '../pages/users/MyAccount'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/turfs' element={<Turfs />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/business/signup' element={<BusinessSignup />} />
            <Route path='/business/login' element={<BusinessLogin />} />
            <Route path='/business/logout' element={<BusinessLogout />} />
        </Routes>
    </>
  )
}

export default AllRoutes