import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import { Box, Grid } from '@mui/material';
import ShopCategory from '../../Components/ShopCategories/ShopCategory';
import ShopProducts from '../../Components/ShopProducts/ShopProducts';
import Products from '../../Components/Products/Products';

const Shop = () => {

  return (
    <div>
      <Header isLogin={true}/>
      <Grid container spacing={2}>
  <Grid item xs={4}>
    <ShopCategory/>
  </Grid>
  <Grid item xs={8} >
    <ShopProducts/>
  </Grid>
  
</Grid>
    </div>
  )
}

export default Shop