import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AInput from '../../Core/Input';
import { FormControl } from '@mui/material';
import AButton from '../../Core/Button';
import { ATitle } from '../../Core/Title';
import { ImageMotion } from '../../Components/ImageMotion/Index';
import ImageCarousel from '../../Components/ImageCarsouel';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const About = () => {
  const[photo,setPhoto]=useState<Photo[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const getPhotos=()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(resp=>{
      setPhoto(resp.data);
      console.log(resp.data)})
    .catch(err=>console.error(err));
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((preV:any) => ({
      ...preV,
      [name]: value
    }))
};

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    // console.log(email, password)
    console.log(form)
    setEmail("");
    setPassword("")
  }

  const images = [
    "https://images.unsplash.com/photo-1556707980-5b8beb6970f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1680286977134-f88bd1f926ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681031465676-995faaaac5bf?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1680865198256-0fc14a55ea8a?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(()=>{
    getPhotos();
  },[])
  return (
    <div>About
      {/* {
        photo.map((item,index)=>(
          <div key={item.id}>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.url}</li>
          </div>
        ))
      } */}
        <FormControl>
          <AInput label='Password' variant='standard' isPassword value={form.password} onChange={handleTextChange} name='password'  />
          <AInput label='Email' variant='standard' value={form.email} onChange={handleTextChange} name='email' />
          {/* <button onClick={handleFormSubmit}>Submit</button> */}
          <AButton title='Submit Form' onClick={handleFormSubmit} variant='contained' />
          <ATitle title='Main Body' varaiant='body2' />
          <AButton title='Button1' variant='contained'/>
          <AButton title='Button2' variant='contained'/>
        </FormControl>
        <ImageMotion/>

    </div>
  )
}

export default About