import React, {useEffect} from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import UserNavbar from '../components/UserNavbar';


const UserProtactedRoute = ()=>{
  let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("user_access"))
        {
            navigate("/login");
        }

    },[])



  return(
    <>
    <div className="container my-5">
        <div className='row'>
          <UserNavbar />
          <div className='col-md-10'>
            <Outlet />
          </div>
        </div>
    </div>
    </>
    
  )
}

export default UserProtactedRoute