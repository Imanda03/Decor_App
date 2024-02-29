import React from 'react'
import { Box,Typography,IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

interface catitem{
   item:String;
   icon: JSX.Element; 
  }

const CategoryItem:React.FC<catitem> = ({item,icon}) => {
    
  return (
    <div className=''>
        <Link to={`/category/${item}`}>
            <Box sx={{ '&:hover': {
                backgroundColor: '#B08968',
              },
              display:'flex', flexDirection:'column',
              justifyContent:'center',alignItems:'center',
               my:1, p:4}}>

              <IconButton >{icon}</IconButton>
              <Typography variant='subtitle1'>{item}</Typography>
             </Box>

            </Link>
    </div>
  )
}

export default CategoryItem;