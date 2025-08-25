import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Help from '../pages/Help'
import Login from '../pages/Login'
import Student from '../pages/Student'
import Demo1 from '../pages/Demo1'
import Product from '../pages/Product'

const AllRoutes = () => {
  return (
    <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/about"  element={<About />} />
                    <Route path="/contact"  element={<Contact />} />
                    <Route path="/help"  element={<Help />} />
                    <Route path="/login"  element={<Login />} />
                    <Route path="/student"  element={<Student />} />
                    <Route path="/demo1"  element={<Demo1 />} />
                    <Route path="/product"  element={<Product />} />
                    
                </Routes>
  )
}

export default AllRoutes