import React,{useEffect} from 'react'
import { useNavigate,Outlet, Navigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import BussinessNavbar from '../components/BussinessNavbar'
const BussinessProtecetRoute = () => {
    let navigate =useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("bussiness_access")){
            navigate("/bussiness/login")
        }
    },[])
  return (
    <>
    <div style={{marginTop:"150px"}} className=' container '>
    <div className="row">
        <BussinessNavbar/>
       
    
      <div  className="col-md-10 "><Outlet/></div>
    </div>
</div>
    </>
  )
}

export default BussinessProtecetRoute