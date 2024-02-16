import React, { useState } from 'react'
import './App.css'
import Homepage from './Pages/HomePage/Homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/LoginPage/Login'
import Register from './Pages/RegisterPage/Register';
import Shop from './Pages/ShopPage/Shop';
import About from './Pages/AboutPage/About';
import './style.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>} />


      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
