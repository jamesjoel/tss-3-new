import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
const IsBusinessLoggedIn = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("business_access")){
            navigate("/")
        }
    },[])
  return (
    <Outlet />
  )
}

export default IsBusinessLoggedIn