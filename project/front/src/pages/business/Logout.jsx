import React from 'react'
import {Navigate} from 'react-router-dom'
const Logout = () => {

    localStorage.removeItem("business_access");
    localStorage.removeItem("business_name");

  return (
    <Navigate to="/business/login" />
  )
}

export default Logout