import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

// import global css
import '../../css/global.css'

// import component css
import './Navbar.css'

// import images
import logo from '../../images/logo.jpg'

const pages = [
  {
    name: 'Foxhole',
    path: '/foxhole'
  },
  {
    name: 'Other Games',
    path: '/other'
  },
  {
    name: 'About',
    path: '/about'
  }];

function Navbar() {
  return (
    <AppBar position="static" sx={{
      bgcolor: 'var(--wardenBlue)',
      position: 'absolute'
    }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <img 
            src={logo}
            alt='the 93rd artillery logo'
            style={{
              height: '40px',
              width: '40px',
              margin: '5px'
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              m: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
              93rd Artillery
            </Link>
          </Typography>

          <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' }
            }}>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(({name, path}) => (
                <MenuItem key={name}>
                  <Typography textAlign="center">
                    <Link to={path}>
                      {name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
              93rd Artillery
            </Link>

          </Typography>
          <Box sx={{
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end'
            }}>
            {pages.map(({name, path}) => (
              <Button
                key={name}
                sx={{ m: 2, color: 'white', display: 'block' }}
              >
                <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;