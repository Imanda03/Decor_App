import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { singleProduct } from '../../interface';
import { Box } from '@mui/material';
import { ProductItemStyle } from './ProductItemStyle';

interface product {
  item: singleProduct;
}

const ProductItem: React.FC<product> = ({ item }) => {
  const { categoryname } = useParams();

  const classes = ProductItemStyle();

  return (

     <Box className={classes.productbox} >
       {/* <Link to={`/category/${categoryname}/product/${item.id}`}>  */}
      <Link to={`/product/${item.id}`}>
        <Box className={classes.productitem}>
          <img src={item.thumbnail} className={classes.img} />
          <Box>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </Box>
        </Box>
      </Link>
    </Box> 

   
    



  )
}

export default ProductItem

