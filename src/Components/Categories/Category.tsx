// import React, { useEffect, useState } from 'react'
// import CategoryItem from '../CategoryItem/CategoryItem';
// import axios from 'axios';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import LightIcon from '@mui/icons-material/Light';
// import ChairIcon from '@mui/icons-material/Chair';
// import DeckIcon from '@mui/icons-material/Deck';
// import SpaIcon from '@mui/icons-material/Spa';
// import { Box, Grid, Container } from '@mui/material';

// const Category = () => {

//   const [categories, setCategories] = useState<string[]>([]);

//   const getCategory = () => {
//     axios.get(`https://dummyjson.com/products/categories`)
//       .then(resp => {
//         setCategories(resp.data)
//         // console.log(categories);
//         ;
//       })
//       .catch(err => console.error(err));
//   }

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const desiredCategories = [
//     {

//       'furniture': {
//         "name": "furniture",
//         "icon": <ChairIcon />
//       },
//       'skincare': {
//         "name": "skincare",
//         "icon": <SpaIcon />
//       },
//       'fragrances': {
//         "name": "fragrances",
//         "icon": <AcUnitIcon />
//       },
//       'lighting': {
//         "name": "lighting",
//         "icon": <LightIcon />
//       },
//       'home-decoration': {
//         "name": "home-decoration",
//         "icon": <DeckIcon />
//       }
//     } 
//   ]

// desiredCategories.map((items:any)  => {
//   Object.keys(items).forEach((key:any) => {
//     console.log(items[key].name)
//   })
// } )

//   return (
//     <div>

//       <Container sx={{ mt: { sm: -4, md: -9 }, mb: 7 }} >   
//           <Grid container spacing={3} justifyContent='center'>
//             <Grid item sm={12} md={10}>
//               <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#DDB892',p:1}}>
//               {
//                 desiredCategories.map((items:any, index:number) => (
//                   Object.keys(items).map((key:any) => (
//                     <Box key={index} sx={{ width: '100%' }} >
//                       <CategoryItem
//                         item={items[key].name}
//                         icon={items[key].icon}
//                       />
//                     </Box>
//                   ))
//                 ))
//               }
//               </Box>
//             </Grid>
//           </Grid>
   
//       </Container>
//     </div>
//   )
// }

// export default Category;


import React, { useEffect, useState } from 'react'
import CategoryItem from '../CategoryItem/CategoryItem';
import axios from 'axios';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightIcon from '@mui/icons-material/Light';
import ChairIcon from '@mui/icons-material/Chair';
import DeckIcon from '@mui/icons-material/Deck';
import SpaIcon from '@mui/icons-material/Spa';
import { Box, Grid, Container, Typography } from '@mui/material';
import { CategoryStyle } from './CategoryStyle.tsx';

const Category = () => {

  const [categories, setCategories] = useState<string[]>([]);

  const classes=CategoryStyle();

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

      {/* <Container sx={{ mt: { sm: -4, md: -9 }, mb: 7 }} className={classes.container}>    */}
      <Box sx={{  mb: 7 }} className={classes.container}>   

      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      <Grid container spacing={2}>
            {/* Left Grid Item */}
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* Left Top */}
                        {/* <Grid container justifyContent="center">
                            <Grid item> */}
                               <img src=""/>
                            {/* </Grid>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
            {/* Right Grid Item */}
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* Right Top */}
                        <Grid container justifyContent="center">
                            <Grid item>
                                Right Top
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {/* Right Bottom */}
                        <Grid container justifyContent="center">
                            <Grid item>
                                Right Bottom
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
          {/* <Grid container spacing={3}>
            <Grid item sm={12} md={10}>
              <Box >
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
          </Grid> */}
   
      </Box>
    </div>
  )
}

export default Category;