import React, { useState } from 'react'
import './Register.css';
import keyImage from '../../assets/key.png'; // Adjust the path based on your directory structure
import userImage from '../../assets/user.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailIcon from '@mui/icons-material/Email';
import InputBox from '../../ReuseComponent/InputBox';
import { Input } from 'antd';

interface Info {
  firstname: string;
  lastname: string;
  phone: string;
  address:string;
  email: string;
  password: string;
  confirmpassword: string;
}
const Register: React.FC = () => {

  const [info, setInfo] = useState<Info>({ firstname: '', lastname: '', phone: '', email: '',address:'', password: '', confirmpassword: '' });
  const [userErr, setUserErr] = useState(false);
  const[passwordErr,setPasswordErr]=useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(prevInfo => ({ ...prevInfo, [e.target.name]: e.target.value }));
  }

  const renderErr=(fieldname:string, fieldvalue:string )=>{
    return (<p className='text-[0.5rem] md:text-[0.6rem] text-red-700'>{userErr && fieldvalue!==undefined && fieldvalue.length <=3 ? `${fieldname} must  be at least 3 digits`:null}</p>)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (info.firstname.length <= 3 || info.lastname.length <= 3 || info.phone.length <= 3 || info.password.length <= 3 || info.confirmpassword.length <= 3) {
      setUserErr(true);
      return;
    }
    if(info.password !== info.confirmpassword){
      setPasswordErr(true);
    }
    console.log(info);

  }

  return (
    <div className='register w-full md:w-screen h-screen flex items-center justify-center bg-custom-blue-400 '>
      <div className="wrapper flex flex-col md:flex-row rounded-xl border border-blue-700 w-full md:w-[80%] lg:w-[60%] xl:w-[45%]] mx-4 md:mx-0 relative">
        <div className="top bg-slate-500 absolute md:w-24 md:h-24 w-16 h-16 rounded-full left-0 right-0 m-auto flex justify-center items-center -top-6 md:-top-12">
          <PersonOutlineOutlinedIcon className='icon text-white' />
        </div>
        <div className="left m-6 mb-14 p-4 md:p-0 md:w-4/5 mt-8 md:mt-14">
          <div className="form">
            <form onSubmit={handleSubmit} className='flex mt-4 font-bold relative text-xs md:text-[1rem] md:flex-row flex-wrap justify-around items-center'>
              <div className="w-[40%]">
                <div className="inputbox relative my-2 md:my-4">
                  <InputBox type='text' name="firstname" onChange={handleChange} value={info.firstname} className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none' placeholder='phone' />
                  <span className='absolute left-0 px-2'>First name</span>
                  <img src={userImage} className='md:w-5 w-4 absolute right-1 md:right-4 top-1 md:-top-1' />
                  {renderErr('First name',info.firstname)}

                </div>
              </div>

              <div className="w-[40%]">
                <div className="inputbox relative my-2 md:my-4">
                  <InputBox type='text'name="lastname" onChange={handleChange} value={info.lastname} className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none' placeholder='phone' />
                  <span className='absolute left-0 px-2'>Last name</span>
                  <img src={userImage} className='md:w-5 w-4 absolute right-1 md:right-4 top-1 md:-top-1' />
                {renderErr('Last name',info.lastname)}
                </div>

              </div>
              <div className="w-[40%] ">
                <div className="inputbox relative my-2 md:my-4 ">
                  <InputBox type='text'name="phone" onChange={handleChange} value={info.phone} className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none' placeholder='phone' />
                  <span className='absolute left-0 px-2'>Phone</span>
                  <img src={userImage} className='md:w-5 w-4 absolute right-1 md:right-4 top-1 md:-top-1' />
                {renderErr('phone',info.phone)}
                </div>
              </div>

              <div className="w-[40%] ">
                <div className="inputbox relative my-2 md:my-4 ">
                  <InputBox type='text'
 name="address" onChange={handleChange} value={info.address} className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none' placeholder='address' />
                  <span className='absolute left-0 px-2'>Address</span>
                  <img src={userImage} className='md:w-5 w-4 absolute right-1 md:right-4 top-1 md:-top-1' />
                {renderErr('address',info.address)}
                </div>
              </div>

              <div className="w-[40%] ">
                <div className="inputbox relative my-2 md:my-4">
                  <InputBox type='text'name="email" onChange={handleChange} value={info.email} className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none' placeholder='phone' />
                  <span className='absolute left-0 px-2'>Email</span>
                  <EmailIcon className='emailicon md:w-5 w-4 absolute right-1 md:right-4 top-1 md:-top-1' />
                {renderErr('Email',info.email)}
                </div>

              </div>
              <div className="w-[40%]">
                <div className="inputbox relative my-2 md:my-4 ">
                  <InputBox type='password' name="password" onChange={handleChange} value={info.password} className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none' placeholder='password' />
                  <span className='absolute left-0 py-4 px-2'>Password</span>
                  <img src={keyImage} className='md:w-5 w-4 absolute right-1 md:right-4 top-1 md:-top-1 bg-transparent' />
                {renderErr('Password',info.password)}
                </div>
              </div>
              <div className="w-[40%] mr-[50%]">
                <div className="inputbox relative my-2 md:my-4 ">
                  <InputBox type='password' name="confirmpassword" onChange={handleChange} value={info.confirmpassword}  className='p-1 border-b border-blue-700 w-full focus:border-blue-700 outline-none' placeholder='password' />
                  <span className='absolute left-0 py-4 px-2'>ConfirmPassword</span>
                  <img src={keyImage} className='md:w-5 w-4 absolute right-1 md:right-4 top-1 md:-top-1 bg-transparent' />
                   <p className='pass text-[0.5rem] md:text-[0.6rem] text-red-700'>{passwordErr? 'Password didnot match' : null}</p>
                </div>

              </div>

              <button className='bg-custom-brown-600 hover:bg-custom-brown-500 text-black font-bold p-2 w-[82%] m-auto rounded-2xl'>Register</button>

            </form>
          </div>

        </div>

        <div className="right bg-gradient-to-tr from-custom-brown-700 via-orange-300 via-slate-500 to-custom-brown-300 border border-custom-blue-400 rounded-xl md:w-1/3 flex flex-col justify-center items-center space-y-12 p-5 text-xs md:text-base">
          <div className="title font-bold text-lg  md:text-2xl ">Register us</div>
        </div>
      </div>
    </div>

  )
}

export default Register;





