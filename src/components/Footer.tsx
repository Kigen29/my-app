import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Theme from '../theme/Theme';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#46b983', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <Typography variant="body1" gutterBottom>
        © 2024 Your Company. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Designed and built by <Link href="https://www.example.com" target="_blank" rel="noopener" sx={{ color:'#fff'}}>AlcoCall</Link>
      </Typography>
    </Box>
    
  );
};

export default Footer;
