import React,{useEffect} from 'react'
import { useNavigate,Outlet } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'
    
    const UserProtecetRoute=()=>{
   let navigate = useNavigate()
  useEffect(()=>{
    if( ! localStorage.getItem("user_access"))
    {
      navigate("/login")
    }
  },[])
  return(
    <>
    <div style={{marginTop:"150px"}} className=' container '>
    <div className="row">
      <UserNavbar/>
    
      <div className="col-md-10"><Outlet/></div>
    </div>
    </div>
    </>

  )
}
    


export default UserProtecetRoute