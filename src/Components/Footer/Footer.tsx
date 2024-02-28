import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Container, Divider, Grid, Typography, Stack } from '@mui/material';

const Footer = () => {
  return (
    <>
      <footer>
        <Box>
          <Container sx={{ backgroundColor: '#7F5539'}}>
            <Grid container color='#E2E8F0' padding={4}>
              <Grid item xs={3}>
                <Box>
                  <Typography sx={{ fontSize: { sm: '0.6rem', md: '1.3rem' }, fontWeight: 'bold' }}>DECOR</Typography>
                  <Stack direction='row' spacing='0.8rem' paddingTop={3}>
                    <Box bgcolor='#1FDE26' display='flex' justifyContent='center' alignItems='center' width={35} height={35} sx={{ border: '1px solid white', borderRadius: '50%' }}>
                      <WhatsAppIcon />
                    </Box>
                    <Box bgcolor='#EC30A7' display='flex' justifyContent='center' alignItems='center' width={35} height={35} sx={{ border: '1px solid white', borderRadius: '50%' }}>
                      <InstagramIcon />
                    </Box>
                    <Box bgcolor='#2CB1B6' display='flex' justifyContent='center' alignItems='center' width={35} height={35} sx={{ border: '1px solid white', borderRadius: '50%' }}>
                      <TwitterIcon />
                    </Box>
                    <Box bgcolor='darkblue' display='flex' justifyContent='center' alignItems='center' width={35} height={35} sx={{ border: '1px solid white', borderRadius: '50%' }}>
                      <FacebookIcon />
                    </Box>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{paddingLeft:'1.2rem'}}>
                  <Typography variant="h6" display="block" gutterBottom sx={{ fontSize: { xs: '0.6rem', md: '0.95rem' }, fontWeight: 'bold' }}>
                    HOW DOES IT WORK
                  </Typography>

                  <Stack direction='column' spacing='0.5rem' paddingTop={3}>                    
                   <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                    Portfolio
                    </Typography>
                    <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                    Customer Reviews
                    </Typography>
                    <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                    About us
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{paddingLeft:'1.2rem'}}>
                  <Typography variant="h6" display="block" gutterBottom sx={{ fontSize: { xs: '0.6rem', md: '0.95rem' }, fontWeight: 'bold' }}>
                  SERVICES
                  </Typography>

                  <Stack direction='column' spacing='0.5rem' paddingTop={3}>                    
                   <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                     Global Shipping 
                    </Typography>
                    <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                    Photography
                    </Typography>
                    <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                    Products
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box sx={{paddingLeft:'1.2rem'}}>
                  <Typography variant="h6" display="block" gutterBottom sx={{ fontSize: { xs: '0.6rem', md: '0.95rem' }, fontWeight: 'bold' }}>
                  CONTACT US
                  </Typography>

                  <Stack direction='column' spacing='0.5rem' paddingTop={3}>                    
                   <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                   9852365871, 01-52365
                    </Typography>
                    <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                    info@decor.com
                    </Typography>
                    <Typography variant="body2" display='block' gutterBottom sx={{fontSize:{xs:'0.49rem',md:'0.86rem'}}}>
                    Lainchaur, Kathmandu 
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </>


  )
}

export default React.memo(Footer)
