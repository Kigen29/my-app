import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ShoppingIcon from '@mui/icons-material/ShoppingCart';
import DeliveryIcon from '@mui/icons-material/LocalShipping';
import GiftIcon from '@mui/icons-material/CardGiftcard';

const ServicesContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(8),
  textAlign: 'center',
}));



const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card>
        <CardContent>
            {icon}
            <Typography variant="h6">{title}</Typography>
            <Typography>{description}</Typography>
        </CardContent>
    </Card>
);

export default function Services() {
  return (
    <ServicesContainer>
      <h1>Our Services</h1>
      <Grid container spacing={4} justifyContent="center">

        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard
            icon={<ShoppingIcon fontSize="large" />}
            title="Shop for Alcohol"
            description="Browse through our wide selection of alcoholic beverages."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard
            icon={<DeliveryIcon fontSize="large" />}
            title="Fast Delivery"
            description="Enjoy quick and reliable delivery options."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard
            icon={<GiftIcon fontSize="large" />}
            title="Gift Options"
            description="Find the perfect gift for any occasion."
          />
        </Grid>

      </Grid>
    </ServicesContainer>
  );
}
