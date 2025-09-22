import React from 'react'
import { Routes,Route ,Outlet,useNavigate,NavLink} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/user/Login';
import SignUp from '../pages/user/SignUp';
import BussinessSingup from '../pages/bussiness/SignUp'
import BussinessLogin from '../pages/bussiness/Login'
import Turf from '../pages/Turf';
import Logout from '../pages/user/Logout';
import MyAccount from '../pages/user/MyAccount';
import BussinessLogout from '../pages/bussiness/Logout'
import MyProfile from '../pages/user/MyProfile';
import { useEffect } from "react";
import UserNavbar from '../components/UserNavbar';
import MyTurf from '../pages/bussiness/MyTurf';
import UserProtecetRoute from './UserProtecetRoute';
import BussinessMyAccount from '../pages/bussiness/MyAccount'
import BussinessProtecetRoute from './BussinessProtecetRoute';
import AddTurf from '../pages/bussiness/AddTurf';
import IsUserLoggedIn from './IsUserLoggedIn';
import IsBussinessLoggedIn from './IsBussinessLoggedIn';
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/turf/:id' element={<Turf/>}/>
        <Route path='/about' element={<About/>}/>
        
        <Route path='' element={<IsUserLoggedIn/>}>
        <Route path='/bussiness/login' element={<BussinessLogin/>}/>
        <Route path='/bussiness/signup' element={<BussinessSingup/>}/>
        </Route>
        
        <Route path='' element={<IsBussinessLoggedIn/>} >
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        </Route>



        <Route path='' element={<UserProtecetRoute/>}>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/myaccount' element={<MyAccount/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>

        </Route>

        <Route path='/bussiness' element={<BussinessProtecetRoute/>}>
        <Route path='myaccount' element={<BussinessMyAccount/>}/>
        <Route path='addturf' element={<AddTurf/>}/>
        <Route path='myturf' element={<MyTurf/>}/>
        <Route path='logout' element={<BussinessLogout/>}/>
        </Route>
        
        
    </Routes>
    </>
  )
}

export default AllRoutes



