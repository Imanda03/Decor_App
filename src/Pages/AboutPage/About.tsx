import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const About = () => {
  const[photo,setPhoto]=useState<Photo[]>([]);

  const getPhotos=()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(resp=>{
      setPhoto(resp.data);
      console.log(resp.data)})
    .catch(err=>console.error(err));
  }

  useEffect(()=>{
    getPhotos();
  },[])
  return (
    <div>About
      {
        photo.map((item,index)=>(
          <div key={item.id}>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.url}</li>
          </div>
        ))
      }
    </div>
  )
}

export default About