import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { BodyStyle } from './BodyStyle';
import Products from '../Products/Products';

const Body = () => {

  const classes = BodyStyle();

  const services=[
    {
      name:'Renovation',
      description:'Enhancing spaces with skill improvements on upgrades',
      img:'https://plus.unsplash.com/premium_photo-1683129618086-4c87d263b48b?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name:'Design',
      description:'Creating stylish and functional interior concepts',
      img:'https://plus.unsplash.com/premium_photo-1683133425810-c4bf11ca2aac?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name:'Landscape',
      img:'https://plus.unsplash.com/premium_photo-1683134044446-8fca992e9fc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D',
      description:'Crafting serene beautiful outdoor environments',
    },
    {
      name:'Style',
      description:'Styling stunning decoration on environments.',
      img:'https://plus.unsplash.com/premium_photo-1681980018817-b36ab8848616?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <Box>
      <Box className={classes.container}>
        <Grid container spacing={2} className={classes.gridcontainer}>
          <Grid item xs={6} className={classes.left}>
            <Box className={classes.info}>
              <Typography variant="h5" color='brown' gutterBottom className={classes.title}>
                EXQUISITE DESIGN COMBINED WITH FUNCTIONALITIES
              </Typography>
              <Typography variant="subtitle1" color='brown' gutterBottom className={classes.subtitle} >
                Great interior design can speak to a brand's values, enhance an environment for daily life, make function more intuitive and aesthetically pleasing. Aesthetics isn't just about looking pretty either - good interior design can promote creativity and productivity by fostering mindfulness and serenity in workers.</Typography>
            </Box>

          </Grid>
          <Grid item xs={6} className={classes.right}>
            <Box className={classes.imagecontainer}>
              <iframe src="https://www.youtube.com/embed/ScIUtfZC3sc" frameborder="0" allowfullscreen className={classes.img}></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Products />

      {/* Services */}
      <Box className={classes.servicecontainer}>
      <Typography variant="h4" color='brown' gutterBottom className={classes.servicetitle}>
                Services
                </Typography>
        <Grid container spacing={2} className={classes.servicegridcontainer}>
          {
            services.map((item,index)=>(
              <Grid item xs={3} key={index}>
              <Box className={classes.leftimagecontainer}>
                <img src={item.img} className={classes.image} />
                <Box className={classes.servicetitle}>
                  <Box>
                  <Button variant="contained" className={classes.servicebutton}>{item.name}</Button>  
                  </Box>
                  <Box>
                  <Typography variant="subtitle2" color='black' gutterBottom className={classes.text}>
                  {item.description}
                  </Typography>
                  
                  </Box>
                 
                </Box>
              </Box>
            </Grid>
            ))
          }
          
        </Grid>
      </Box>

      {/* Stay in loop */}
      {/* <Box> */}
        <Box className={classes.staybox}>
        <Box className={classes.stayimagecontainer}>
        <img src='https://images.unsplash.com/photo-1494442182929-0f8be054d08c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className={classes.stayimage}/>
        </Box>
        <Box className={classes.stayinfo}>
          <Box>
          <Typography variant="h4" color='white' gutterBottom className={classes.staytext}>
                  Stay in the Loop for Exclusive Offers!
                  </Typography>     
          </Box>
          <Box className={classes.staysubtitle}>
          <Typography variant="subtitle1" color='white' gutterBottom className={classes.staysubtext}>
                  Subscribe to our newsletter to be the first to receive exclusive offers. Discover what's trending and decorate 
                  your dream space with us.
                  </Typography>
          </Box>

          <Box className={classes.staysearch}>
          <TextField
          id="filled-search"
          label="Enter your Email"
          type="search"
          variant="filled"
        />
        <Button variant="contained" color="success" className={classes.staybutton}>
          Subscribe
        </Button>
       </Box>
        </Box>
        </Box>
          </Box>
  )
}

export default Body