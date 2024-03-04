import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Products/Products';
import './Homepage.css';
import Category from '../../Components/Categories/Category';
import ImageCarsouel from '../../Components/ImageCarsouel';

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Homepage = () => {
  return (
    <div className='w-100vw'>
      <Header isLogin={true} />
      <div className='wrap'>
        <div className="wra">
          <div className="img h-[45vh] md:h-[90vh]">
            {/* <img src='https://images.unsplash.com/photo-1556707980-5b8beb6970f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-full w-full' /> */}
            <ImageCarsouel images={images}/>
          </div>

          <Category />
          <Products />



        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage