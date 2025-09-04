import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const IsUserLoggedIn = () => {
    let navigate = useNavigate();
    useEffect(()=>{

        if(localStorage.getItem("user_access")){
            navigate("/")
        }
    },[])
  return (
    <Outlet />
  )
}

export default IsUserLoggedIn