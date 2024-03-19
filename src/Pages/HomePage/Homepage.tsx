import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Products/Products';
import './Homepage.css';
import ImageCarsouel from '../../Components/ImageCarsouel';
import HomeCategory from '../../Components/HomeCategory/HomeCategory';
import Body from '../../Components/Body/Body';
import { ImageMotion } from '../../Components/ImageMotion/Index';

// const images = [
//   "https://plus.unsplash.com/premium_photo-1681031465676-995faaaac5bf?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1680286977134-f88bd1f926ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1680865198256-0fc14a55ea8a?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1556707980-5b8beb6970f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

const Homepage = () => {
  return (
    <div className='w-100vw'>
      <Header isLogin={false} />
      <div className='wrap'>
        <div className="wra">
          <div className="img h-[45vh] md:h-[88vh]">
            {/* <img src='https://images.unsplash.com/photo-1556707980-5b8beb6970f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-full w-full' /> */}
            {/* <ImageCarsouel images={images}/> */}
            <ImageMotion />
          </div>

          <HomeCategory />
          <Body/>
          {/* <Products /> */}
          


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage