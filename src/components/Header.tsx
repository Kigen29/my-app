import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Center from '../theme/Center';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" href="/">
            Alcohol Store
          </Button>
        </Typography>
        
      <Box sx={{ display: 'flex', justifyContent: 'center', flex: 14, padding: '14px'}}>
          <Button color="inherit" href="/about">
            Home
          </Button>
          <Button color="inherit" href="/services">
            Services
          </Button>
          <Button color="inherit" href="/contact">
            Store
          </Button>
        </Box>
        <Box>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <Button color="inherit" href="/signup">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
