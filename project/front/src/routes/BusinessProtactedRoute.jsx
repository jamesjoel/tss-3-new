import React, {useEffect} from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import BusinessNavbar from '../components/BusinessNavbar';

const BusinessProtactedRoute = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("business_access")){
            navigate("/business/login")
        }
    },[])

  return (
    <>
    <div className="container my-4">
        <div className="row">
            <BusinessNavbar />
            <div className="col-md-10">

                    <Outlet />
            </div>
        </div>

    </div>
    </>
  )
}

export default BusinessProtactedRoute