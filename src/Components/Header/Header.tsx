import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const[showSearch,setShowSearch]=useState<Boolean>(false);
  const[showBar,setShowBar]=useState<Boolean>(true);

  return (
          <div className="header h-12 w-full md:w-full relative z-10">
            <div className="nav flex justify-around h-full py-4">
              <div className="headsearch flex-1 justify-center items-center">
                {showSearch ? <input type='text' placeholder='Search products' className='ml-8 border border-gray-300'/>:null}
                <SearchIcon className='icon ml-6' onClick={()=>setShowSearch(!showSearch)}/>
              </div>
              <div className="center" style={{'flex':2}}>
                <div className="bar flex justify-end md:hidden" onClick={()=>setShowBar(!showBar)}>
                    <MenuIcon/>
                </div>
                {showBar?
                  <div className="menu flex flex-col md:flex-row md:justify-around items-center md:bg-white md:text-black text-xs space-y-2 p-2 md:p-0 md:space-y-0 md:text-[1rem] bg-custom-brown-400">
                  <Link to='/' className=' hover:text-blue-600'>Home</Link>
                  <Link to='/shop' className=' hover:text-blue-600'>Shop</Link>
                  <Link to='/about' className=' hover:text-blue-600'>About</Link>
                  <Link to='/register' className=' hover:text-blue-600'>Register</Link>
                  <Link to='/login' className=' hover:text-blue-600'>Login</Link>
                </div>
               : null}
              </div>
              <Link to='/cart'><div className="right flex-1 flex justify-end items-center">
                <ShoppingBagIcon className='mr-4 md:mr-20'/>
              </div></Link>
            </div>
          </div>
  )
}

export default React.memo(Header)

