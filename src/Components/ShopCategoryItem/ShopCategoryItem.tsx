import React from 'react'
import { Box,Typography,IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShopCategoryItemStyle } from './ShopCategoryItemStyle';

interface catitem{
   item:String;
  }

const ShopCategoryItem:React.FC<catitem> = ({item}) => {
  const classes=ShopCategoryItemStyle();
    
  return (
    <div className=''>
        <Link to={`/category/${item}`}>

              <Typography variant='caption' className={classes.categorylist}>{item}</Typography>

            </Link>
    </div>
  )
}

export default ShopCategoryItem;