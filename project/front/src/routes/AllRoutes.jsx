import React, {useEffect} from 'react'
import {Routes, Route, Outlet, useNavigate, NavLink} from 'react-router-dom'
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
import BusinessMyAccount from '../pages/business/MyAccount'
import MyProfile from '../pages/users/MyProfile'
import UserNavbar from '../components/UserNavbar'
import MyTurf from '../pages/business/MyTurf'
import UserProtactedRoute from './UserProtactedRoute'
import BusinessProtactedRoute from './BusinessProtactedRoute'
import AddTurf from '../pages/business/AddTurf'
import IsUserLoggedIn from './IsUserLoggedIn'
import IsBusinessLoggedIn from './IsBusinessLoggedIn'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/turfs/:id' element={<Turfs />} />
            <Route path='/about' element={<About />} />
            <Route path='' element={<IsBusinessLoggedIn />}>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Route>


            <Route path='' element={<IsUserLoggedIn />}>
              <Route path='/business/signup' element={<BusinessSignup />} />
              <Route path='/business/login' element={<BusinessLogin />} />
            </Route>
            
            <Route path='' element={<UserProtactedRoute />}>
              <Route path='/logout' element={<Logout />} />
              <Route path='/myaccount' element={<MyAccount />} />
              <Route path='/myprofile' element={<MyProfile />} />
            </Route>
            
            
          <Route path='/business' element={<BusinessProtactedRoute/>}>
            <Route path='myaccount' element={<BusinessMyAccount />} />
            <Route path='addturf' element={<AddTurf />} />
            <Route path='myturf' element={<MyTurf />} />
            <Route path='logout' element={<BusinessLogout />} />
          </Route>

        </Routes>
    </>
  )
}

export default AllRoutes


