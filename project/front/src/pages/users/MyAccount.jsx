import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const MyAccount = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("user_access"))
        {
            navigate("/login");
        }

    },[])

  return (
    <div className="container my-5">
        <h2>Welcome</h2>
    </div>
  )
}

export default MyAccount