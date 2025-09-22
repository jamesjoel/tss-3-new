import React,{useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const IsBussinessLoggedIn = () => {
    let navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("bussiness_access")){
            navigate("/")
        }
    },[])
  return (
    <Outlet/>
  )
}

export default IsBussinessLoggedIn