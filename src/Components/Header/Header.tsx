import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from 'react-redux';
import { RootState } from '../../Services/store/store';
import { Badge } from '@mui/material';
import axios from 'axios';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { AppBar, Container, Box, Toolbar, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem } from "@mui/material"

const pages = ['Home', 'Shop'];
const settings = ['Profile', 'Logout'];

interface headerInterface {
  isLogin: boolean
}

const Header = ({ isLogin }: headerInterface) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorUser] = useState<null | HTMLElement>(null);
  console.log(isLogin)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorUser(null);
  };

  const data=useSelector((state:RootState)=>state.carts.count);

  return (

    <AppBar position="static" sx={{ bgcolor: '#9c6644' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EventSeatIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DECOR
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleOpenNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleOpenNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <EventSeatIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.toLowerCase()}>
                <Button
                  key={page}
                  onClick={handleCloseUserMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}

            <Link to='/cart'><div className="right flex-1 flex justify-end items-center mt-5">
              <Badge badgeContent={data} color="primary" className='mr-4 md:mr-20'>
              <ShoppingBagIcon className=''/>
                </Badge>
            </div></Link>
          </Box>

          {
            isLogin ? (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link to='/login'>
                  <Button variant='outlined' color='inherit' >Login</Button>
                </Link>
                <Link to='/register'>
                  <Button variant='outlined' color='inherit' >Register</Button>
                </Link>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings" onClick={handleOpenUserMenu}>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Anish" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;

