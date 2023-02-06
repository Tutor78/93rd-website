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
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

// import global css
import '../../css/global.css'

// import component css
import './Navbar.css'

// import images
import logo from '../../images/logo.jpg'

const pages = [
  {
    name: 'Engineering',
    path: '/engineering'
  },
  {
    name: 'Logistics',
    path: '/logistics'
  },
  // {
  //   name: 'Sentinels',
  //   path: '/sentinels'
  // },
  {
    name: 'Feats',
    path: '/feats'
  }];

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            className='navbarImg'
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
            display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              id='icon-button'
              aria-controls={open ? 'nav-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                color: 'white'
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='nav-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labbelledby': 'icon-button'
              }}
            >
              {pages.map(({name, path}) => (
                <MenuItem key={name}>
                <Button
                    key={name}
                    sx={{ m: 2, color: 'black', display: 'flex' }}
                  >
                    <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {name}
                    </Link>
                  </Button>
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
            <img 
              src={logo}
              alt='the 93rd artillery logo'
              style={{
                height: 30,
                width: 30,
                marginRight: 5
              }}
            />
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