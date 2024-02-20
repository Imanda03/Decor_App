import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Products/Products';
import './Homepage.css';
import Category from '../../Components/Categories/Category';

const Homepage = () => {
  return (
    <div className='w-100vw'>
      <Header />
    <div className='wrap'>
      <div className="wra">
        <div className="img h-[45vh] md:h-[90vh]">
        <img src='https://images.unsplash.com/photo-1556707980-5b8beb6970f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-full w-full'/>
        </div>

         <Category/>
          <Products/>
       
       

      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Homepage