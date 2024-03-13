import React, { useEffect, useState } from 'react'
import ShopCategoryItem from '../ShopCategoryItem/ShopCategoryItem';
import axios from 'axios';
import { Box, Grid, Container, List ,ListItem,ListItemText} from '@mui/material';

const ShopCategory = () => {

  const [categories, setCategories] = useState<string[]>([]);

  const getCategory = () => {
    axios.get(`https://dummyjson.com/products/categories`)
      .then(resp => {
        setCategories(resp.data)
        // console.log(categories);
        ;
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getCategory();
  }, []);

 


  // const desiredCategories = ["furniture", "skincare", "fragrances", "lighting", "home-decoration"];
  // const filtercategory = categories.filter(cat => desiredCategories.includes(cat.toLowerCase()));

  return (
    <div>
              <Box sx={{ }}>
              <List>
      {categories.map((category, index) => (
        <ListItem key={index}>
          <ListItemText primary={category} />
        </ListItem>
      ))}
    </List>
              </Box>


      
    </div>
  )
}

export default ShopCategory;