import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import images
import logo from '../images/logo.jpg';

// import css
import '../css/global.css'

function landingPage () {
    return (
        <div className='container' >
            <div className='turnDeviceNotification'></div>
            <Box 
                sx={{ 
                    flexGrow: 1, 
                    height: '100%', 
                    width: '100%', 
                    position: 'absolute' 
                }}
            >
                <Grid 
                    container spacing={2} 
                    sx={{
                        height: '100%',
                        width: '100%',
                        marginLeft: 0,
                        marginTop: 0,
                        alignContent: 'center'
                    }}
                >
                    <Grid item 
                        xs={12} 
                        style={{ 
                            textAlign: 'center', 
                            marginTop: '15px', 
                            padding: 0 
                        }}
                    >
                        <img 
                            src={logo} 
                            alt='the 93rd artillery logo'
                            style={{
                                width: '90%',
                                maxWidth: '500px',
                            }}
                        />
                    </Grid>
                    <Grid item 
                        xs={12} 
                        sx={{ textAlign: 'center' }}
                    >
                        <Link to='/home'>
                            <Button 
                                variant='contained' 
                                style={{
                                    fontSize: '2.5rem', 
                                    borderRadius: '15px', 
                                    backgroundColor: 'var(--wardenBlue)' 
                                    }}
                            >
                                Enter
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default landingPage;