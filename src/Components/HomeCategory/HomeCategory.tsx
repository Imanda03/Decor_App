import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Grid, Container, Typography } from '@mui/material';
import { HomeCategoryStyle } from './HomeCategoryStyle';
import { Link } from 'react-router-dom';

const HomeCategory = () => {

  const classes = HomeCategoryStyle();

  return (
    <Box >
      <Box sx={{ mb: 7 }} className={classes.container}>

        <Typography variant="h4" color='brown' gutterBottom >
          Categories
        </Typography>
        <Grid container spacing={2} className={classes.gridcontainer} >
          {/* Left Grid Item */}
          <Grid item xs={4} className={classes.griditem}>
            <Link to='/category/furniture'>
              <Box className={classes.leftimagecontainer}>
                <img src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={classes.image} />
                <Box className={classes.subtitle}>
                  <Typography variant="subtitle1" color='black' gutterBottom className={classes.text}>
                    Furniture
                  </Typography>
                </Box>

              </Box>
            </Link>
          </Grid>
          <Grid item xs={4} className={classes.griditem}>
            <Link to='/category/fragrances'>
              <Box className={classes.leftimagecontainer}>
                <img src='https://images.unsplash.com/photo-1595535373192-fc8935bacd89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' className={classes.image} />
                <Box className={classes.subtitle}>
                  <Typography variant="subtitle1" color='black' gutterBottom className={classes.text}>
                    Fragrances
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
          {/* Right Grid Item */}
          <Grid item xs={4} className={classes.griditem}>
            <Link to='/category/home-decoration'>
              <Box className={classes.imagecontainer} >
                <img src='https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className={classes.image} />
                <Box className={classes.subtitle}>
                  <Typography variant="subtitle1" color='black' gutterBottom className={classes.text}>
                    Home-Decor
                  </Typography>
                </Box>                    </Box>
            </Link>
            <Link to='/category/lighting'>
              <Box className={classes.imagecontainer}>
                <img src="https://plus.unsplash.com/premium_photo-1701094772103-c60b22a69ccc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={classes.image} />
                <Box className={classes.subtitle}>
                  <Typography variant="subtitle1" color='black' gutterBottom className={classes.text}>
                    Lighting
                  </Typography>
                </Box>                    </Box>
            </Link>
          </Grid>
        </Grid>

      </Box>
    </Box>
  )
}

export default HomeCategory;