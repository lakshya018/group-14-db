import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({drawer, setDrawer}) => {

    
    return (
        <Box >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bonds
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    );
}

export default Navbar;