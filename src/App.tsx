import React, { useState } from 'react'
import './style.css';
import './App.css'
import Homepage from './Pages/HomePage/Homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/LoginPage/Login'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>} />

      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
