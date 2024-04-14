import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Center from '../theme/Center'; 


const HeroContainer = styled(Box)(({ theme,}) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8),
  textAlign: 'center',
  backgroundImage: "url('https://i.pinimg.com/564x/e1/3e/85/e13e856be32c089114c71a0e61b0f3de.jpg')", 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export default function Hero() {
  return (
    <Box sx={{padding: 3, alignItems:'Center', rowSpacing:1 }}>
     <HeroContainer>
      <h1>Welcome to Our Alcohol Ecommerce Store</h1>
      <p>Explore our wide selection of wines, beers, and spirits</p>
      <center>  
      <Button variant="contained" color="secondary" href="/shop" sx={{ width: '20%', alignItems:'center',rowSpacing: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        Shop Now
      </Button>
      </center>
     </HeroContainer>
    </Box>
  );
}
