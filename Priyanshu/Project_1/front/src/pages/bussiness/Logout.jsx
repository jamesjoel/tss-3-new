import React from 'react'
import {Navigate } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("bussiness_access")
    localStorage.removeItem("bussiness_name")
  return (
    <Navigate to="/bussiness/login"/>

  )
}

export default Logout