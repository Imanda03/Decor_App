import React,{useState,useEffect} from 'react'
import ProductItem from '../ProductItem/ProductItem'
import axios from 'axios'

interface product{
  id:number;
  title:string;
  price:string;
  thumbnail:string;
}
const Products = () => {
  const[product,setProduct]=useState<product[]>([]);

  const getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then(resp=>{
      setProduct(resp.data.products);
    })
    .catch(err=>console.error(err));
  }

  useEffect(()=>{
    getProduct();
  },[]);

  return (
    <div>
     <div className="prolist m-2 md:m-4 flex flex-wrap">

    {
      product.map((item)=>(
            <ProductItem key={item.id} item={item}/>
      ))
    }
           
   </div>
    </div>
  )
}

export default Products