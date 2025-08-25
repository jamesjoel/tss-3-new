import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

const Logout = () => {
    // let navigate = useNavigate();
    localStorage.removeItem("user_access");

    // navigate("/login");

  return (
    <Navigate to="/login" />
  )
}

export default Logout