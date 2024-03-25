import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { singleProduct } from '../../interface';
import { Box, Typography } from '@mui/material';
import { ShopProductItemStyle } from './ShopProductItemStyle';

interface product {
  item: singleProduct;
}

const ShopProductItem: React.FC<product> = ({ item }) => {
  const { categoryname } = useParams();

  const classes = ShopProductItemStyle();

  return (
     <Box className={classes.productbox} >
       {/* <Link to={`/category/${categoryname}/product/${item.id}`}>  */}
      <Link to={`/product/${item.id}`}>
        <Box className={classes.productitem}>
          <img src={item.thumbnail} className={classes.img} />
          <Box className={classes.info}>
            <Typography className={classes.title}>{item.title}</Typography>
            <Typography className={classes.price}>Rs.{item.price}</Typography>
          </Box>
        </Box>
      </Link>
    </Box> 

  )
}

export default ShopProductItem

