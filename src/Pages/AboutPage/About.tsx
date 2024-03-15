import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AInput from '../../Core/Input';
import { FormControl } from '@mui/material';
import AButton from '../../Core/Button';
import { ATitle } from '../../Core/Title';

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
          <AInput label='Password' variant='standard' isPassword value={form.password} onChnageText={handleTextChange} name='password'  />
          <AInput label='Email' variant='standard' value={form.email} onChnageText={handleTextChange} name='email' />
          {/* <button onClick={handleFormSubmit}>Submit</button> */}
          <AButton title='Submit Form' onClick={handleFormSubmit} variant='contained' />
          <ATitle title='Main Body' varaiant='body2' />
          <AButton title='Button1' variant='contained'/>
          <AButton title='Button2' variant='contained'/>
        </FormControl>
    </div>
  )
}

export default About