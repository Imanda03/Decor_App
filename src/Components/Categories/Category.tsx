import React, { useEffect, useState } from 'react'
import CategoryItem from '../CategoryItem/CategoryItem';
import axios from 'axios';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightIcon from '@mui/icons-material/Light';
import ChairIcon from '@mui/icons-material/Chair';
import DeckIcon from '@mui/icons-material/Deck';
import SpaIcon from '@mui/icons-material/Spa';
import { Box, Grid, Container } from '@mui/material';

const Category = () => {

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

  // const categoryIcons: { [key: string]: JSX.Element } = {
  //   'furniture': <ChairIcon />,
  //   'skincare': <SpaIcon />,
  //   'fragrances': <AcUnitIcon />,
  //   'lighting': <LightIcon />,
  //   'home-decoration': <DeckIcon />,
  // };

  // const desiredCategories = ["furniture", "skincare", "fragrances", "lighting", "home-decoration"];
  const desiredCategories = [
    {

      'furniture': {
        "name": "furniture",
        "icon": <ChairIcon />
      },
      'skincare': {
        "name": "skincare",
        "icon": <SpaIcon />
      },
      'fragrances': {
        "name": "fragrances",
        "icon": <AcUnitIcon />
      },
      'lighting': {
        "name": "lighting",
        "icon": <LightIcon />
      },
      'home-decoration': {
        "name": "home-decoration",
        "icon": <DeckIcon />
      }
    } 
  ]

desiredCategories.map((items:any)  => {
  Object.keys(items).forEach((key:any) => {
    console.log(items[key].name)
  })
} )

  return (
    <div>

      <Container sx={{ mt: { sm: -4, md: -9 }, mb: 7 }} >   
          <Grid container spacing={3} justifyContent='center'>
            <Grid item sm={12} md={10}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#DDB892',p:1}}>
              {
                desiredCategories.map((items:any, index:number) => (
                  Object.keys(items).map((key:any) => (
                    <Box key={index} sx={{ width: '100%' }} >
                      <CategoryItem
                        item={items[key].name}
                        icon={items[key].icon}
                      />
                    </Box>
                  ))
                ))
              }
              </Box>
            </Grid>
          </Grid>
   
      </Container>
    </div>
  )
}

export default Category;