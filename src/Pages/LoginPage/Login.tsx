import React, { useState } from 'react'
import './Login.css';
import keyImage from '../../assets/key.png'; // Adjust the path based on your directory structure
import userImage from '../../assets/user.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LoginIcon from '@mui/icons-material/Login';
import InputBox from '../../Core/Components/InputBox';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

interface Credential {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const [credential, setCredential] = useState<Credential>({ email: '', password: '' });

  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential(prevInfo => ({ ...prevInfo, [e.target.name]: e.target.value }));
  }

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked); //sets true
    console.log("Checkbox value after update:", e.target.checked); 
};


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credential);

  }
  return (
    <motion.div
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.2 } }}
    >

    <div className='login w-full md:w-screen h-screen flex items-center justify-center bg-custom-blue-400 '>
      <div className="wrapper flex flex-col md:flex-row rounded-xl border border-blue-700 w-full md:w-[80%] lg:w-[60%] xl:w-[45%] mx-4 md:mx-0 relative">
        <div className="top bg-slate-500 absolute w-24 h-24 rounded-full left-0 right-0 m-auto flex justify-center items-center -top-12">
          <PersonOutlineOutlinedIcon className='icon text-white' />
        </div>
        <div className="left m-6 mb-14 p-4 md:w-2/3">
          <div className="form">
            <form onSubmit={handleSubmit} className='flex flex-col mt-4 font-bold relative text-xs md:text-base'>
              <div className="inputbox relative my-6">
                <InputBox type='text' name="email" onChange={handleChange} placeholder='email' className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none'/>
                <span className='absolute left-0 px-2'>Email</span>
                <img src={userImage} className='w-5 absolute right-7 top-1' />
              </div>

              <div className="inputbox relative my-6">
                <InputBox type='text' name="password" onChange={handleChange} placeholder='password' className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none'/>
                <span className='absolute left-0 py-4 px-2'>Password</span>
                <img src={keyImage} className='w-5 absolute right-7 top-1 bg-transparent' />
              </div>

              <div className="forgot text-sm text-blue-900 my-5 flex justify-between">
                <div className="remember">
                  <InputBox type='checkbox' name='remember' checked={rememberMe} onChange={handleChecked}/>
                  <label className=''> Remember me</label>
                </div>
                <div className="forgot">
                  Forgot password?
                </div>

              </div>
              <button className='bg-custom-brown-600 hover:bg-custom-brown-500 text-black font-bold p-2 w-[82%] m-auto rounded-2xl'>LOGIN</button>
              <div className="signup text-blue-900 mt-4 text-sm flex justify-center">
                Dont't have an account?
                <Link to='/register'>
                  <span className='ml-1'> Sign up</span>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="right bg-gradient-to-tr from-custom-brown-700 via-orange-300 via-slate-500 to-custom-brown-300 border border-custom-blue-400 rounded-xl md:w-1/3 flex flex-col justify-center items-center space-y-12 p-5 text-xs md:text-base">
          <div className="title font-bold text-2xl">Login</div>
          <LoginIcon className='icon' />
        </div>
      </div>
    </div>
    </motion.div>

  )
}

export default Login
