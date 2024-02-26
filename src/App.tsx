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
import "antd/dist/reset.css";
import CartPage from './Pages/CartPage/CartPage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'
// import "antd/dist/antd.css";

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
        <Route path='/category/:categoryname' element={<CategoryPage/>}/>
        {/* <Route path='/category/:categoryname/product/:productid' element={<ProductPage/>}/> */}
        <Route path='/product/:productid' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>

      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
