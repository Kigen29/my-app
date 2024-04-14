import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import alcohol1 from '../assets/alcohol1.jpg'

const featuresData = [
  { image: alcohol1, description: 'Description for Image 1' },
  { image: alcohol1, description: 'Description for Image 2' },
  { image: alcohol1, description: 'Description for Image 3' },
  { image: alcohol1, description: 'Description for Image 4' },
  { image: alcohol1, description: 'Description for Image 5' },
  { image: alcohol1, description: 'Description for Image 6' },
];

<img src={alcohol1} alt="alcohol1" />

const CarouselContainer = styled(Box)({
  width: '80%',
  margin: '0 auto',
});

const Feature = () => {
  const [startIndex, setStartIndex] = React.useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, featuresData.length - 3));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" align="center" gutterBottom>
      <h2>Features</h2>
      </Typography>
      <CarouselContainer>
        <Grid container spacing={7}>
          {featuresData.slice(startIndex, startIndex + 3).map((feature, index) => (
            <Grid item xs={4} key={index}>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={feature.image}
                    alt={`Feature ${startIndex + index + 1}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Feature {startIndex + index + 1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
        <Box mt={2} display="flex" justifyContent="center">
          <button onClick={handlePrev} disabled={startIndex === 0}>Prev</button>
          <button onClick={handleNext} disabled={startIndex >= featuresData.length - 3}>Next</button>
        </Box>
      </CarouselContainer>
    </Box>
  );
};

export default Feature;
