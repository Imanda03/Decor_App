import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { AppBar, Container, Box, Toolbar, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem } from "@mui/material"

const pages = ['Home', 'Shop'];
const settings = ['Profile', 'Logout'];

const Header = (isLogin: boolean) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorUser] = useState<null | HTMLElement>(null);

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



  // const [showSearch, setShowSearch] = useState<Boolean>(false);
  // const [showBar, setShowBar] = useState<Boolean>(true);

  return (
    // <div className="header h-12 w-full md:w-full relative z-10">
    //   <div className="nav flex justify-around h-full py-4">
    //     <div className="headsearch flex-1 justify-center items-center">
    //       {showSearch ? <input type='text' placeholder='Search products' className='ml-8 border border-gray-300' /> : null}
    //       <SearchIcon className='icon ml-6' onClick={() => setShowSearch(!showSearch)} />
    //     </div>
    //     <div className="center" style={{ 'flex': 2 }}>
    //       <div className="bar flex justify-end md:hidden" onClick={() => setShowBar(!showBar)}>
    //         <MenuIcon />
    //       </div>
    //       {showBar ?
    //         <div className="menu flex flex-col md:flex-row md:justify-around items-center md:bg-white md:text-black text-xs space-y-2 p-2 md:p-0 md:space-y-0 md:text-[1rem] bg-custom-brown-400">
    //           <Link to='/' className=' hover:text-blue-600'>Home</Link>
    //           <Link to='/shop' className=' hover:text-blue-600'>Shop</Link>
    //           <Link to='/about' className=' hover:text-blue-600'>About</Link>
    //           <Link to='/register' className=' hover:text-blue-600'>Register</Link>
    //           <Link to='/login' className=' hover:text-blue-600'>Login</Link>
    //         </div>
    //         : null}
    //     </div>
    //     <div className="right flex-1 flex justify-end items-center">
    //       <ShoppingBagIcon className='mr-4 md:mr-20' />
    //     </div>
    //   </div>
    // </div>

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
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
          </Box>

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
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default React.memo(Header)

