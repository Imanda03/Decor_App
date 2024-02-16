import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LightIcon from '@mui/icons-material/Light';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import Products from '../../Components/Products/Products';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className='w-100vw'>
      <Header />
    <div className='wrap'>
      <div className="wra">
        <div className="img h-[45vh] md:h-[90vh]">
        <img src='https://images.unsplash.com/photo-1556707980-5b8beb6970f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-full w-full'/>
        </div>

        <div className="categories flex justify-center items-center relative -top-6 md:-top-12">
           <div className="catlist flex w-3/4 justify-center items-center bg-red-300">
           <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
              <ChairOutlinedIcon className='caticon'/>
              <div className="furni">Furniture</div>
            </div>
            <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7 border-t-2 border-red-800">
              <AirlineSeatIndividualSuiteIcon className='caticon'/>
              <div className="furni">Home Textiles</div>
            </div>
            <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
              <InsertPhotoIcon className='caticon'/>
              <div className="furni">Wall Decor</div>
            </div>
            <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
              <LightIcon className='caticon'/>
              <div className="furni">Lighting</div>
            </div>
            <div className="cat flex flex-1 hover:bg-red-400 flex-col items-center justify-center space-y-1 md:space-y-4 p-1 md:p-7">
              <RiceBowlIcon className='caticon'/>
              <div className="furni">Decoration</div>
            </div>
           </div>
        </div>

          <Products/>
       
       

      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Homepage