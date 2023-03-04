import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/amazonia-logo.png";
import '../css/navbar.css';
import {ShoppingCart}  from '@mui/icons-material';
import { Badge } from '@mui/material';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'  className="navbar">
        <Toolbar>
          <IconButton>
          <img src={logo} className="logo" alt='logito'/>
          </IconButton>
          <div className='grow'/>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }} className="hola">
            Hola Hermoso
          </Typography>
          <Button color="inherit" variant='outline'><strong> Sing In</strong></Button>
          <IconButton aria-label='show cart items' color='inherit'>
          <Badge badgeContent={2} color="secondary">
          <ShoppingCart fontSize='large'/>
          </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
