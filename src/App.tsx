import React, { useState } from 'react'
import './App.css'
import Homepage from './Pages/HomePage/Homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/LoginPage/Login'
import Register from './Pages/RegisterPage/Register';
import Shop from './Pages/ShopPage/Shop';
import About from './Pages/AboutPage/About';
import './style.css';
import CategoryPage from './Pages/CategoryPage/CategoryPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import CartPage from './Pages/CartPage/CartPage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'
import NotFound from './Components/NotFound/NotFound'
import LoginPage from './Pages/LoginPage/LoginPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/category/:categoryname' element={<Shop/>}/>
        {/* <Route path='/category/:categoryname/product/:productid' element={<ProductPage/>}/> */}
        <Route path='/product/:productid' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='*' element={<NotFound/>}/>


      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
