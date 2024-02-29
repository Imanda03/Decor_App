import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Shop = () => {
  const[searchQuery,setSearchQuery]=useState<string>('');
  const [data,setData]=useState([]);
  

  const getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then(resp=>{
      setData(resp.data.products);
      console.log("helo",data);
    })
    .catch(err=>console.error(err));
  }

  const handleonChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchQuery(e.target.value);    
  }
 
  


  return (
    <div>
      <Header/>
      <div className="wr">
      {/* <input type='text' placeholder='Search products' onChange={handleonChange} className='ml-8 border border-gray-300'/>
      <SearchIcon className='icon ml-6' onClick={()=>handleSearch(searchQuery)}/> */}
      HEllo This is shop page..
      </div>
    </div>
  )
}

export default Shop