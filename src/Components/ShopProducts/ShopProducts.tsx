import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { singleProduct } from '../../interface';
import axios from 'axios';
import { Box } from '@mui/material';
import { ShopProductsStyle } from './ShopProductsStyle';
import ShopProductItem from '../ShopProductItem/ShopProductItem';

const ShopProducts = () => {
    const {categoryname}=useParams();

    const classes=ShopProductsStyle();
  
    const[data,setData]=useState<singleProduct[]>([]);
  
    const getProductList=()=>{
      axios.get(`https://dummyjson.com/products/category/${categoryname}`)
      .then(resp=>{setData(resp.data.products)
      console.log(resp.data.products);
      })
      .catch(err=>console.error(err));
    }
  
    useEffect(()=>{
      getProductList();
    },[categoryname]);
  
  return (
    <Box className={classes.right}>
        <Box className={classes.box}>
        {
                  data.map((item) => (
                    <ShopProductItem key={item.id} item={item}/>
                  ))
                }
        </Box>
    </Box>
  )
}

export default ShopProducts