import React,{useState,useEffect} from 'react'
import ProductItem from '../ProductItem/ProductItem'
import axios from 'axios'
import { Typography, Box} from '@mui/material';
import { ProductsStyle } from './ProductsStyle';

interface product{
  id:number;
  title:string;
  price:string;
  thumbnail:string;
}
const Products = () => {
  const[product,setProduct]=useState<product[]>([]);

  const classes=ProductsStyle();

  const getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then(resp=>{
      setProduct(resp.data.products.slice(0,4));
    })
    .catch(err=>console.error(err));
  }

  useEffect(()=>{
    getProduct();
  },[]);

  return (
    <div>
       <Typography variant="h4" color='brown' gutterBottom className={classes.h4}>
        Latest Products
      </Typography>
      <Box className={classes.productlist}>
      {
      product.map((item)=>(
            <ProductItem key={item.id} item={item}/>
      ))
    }
      </Box>
    </div>
  )
}

export default Products