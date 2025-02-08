import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import TourDataform from '../Pages/AddTourData/TourDataform';
const AllRouters = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/form' element={<TourDataform/>} />
</Routes>
  )
}

export default AllRouters