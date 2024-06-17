import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useRouter from './useRouter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Properties = ({ firebaseUid, apiUrl, onFilteredProperties }) => {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const { location, guests, pets } = router.query; // Get query params

  useEffect(() => {
    if (firebaseUid && apiUrl) {
      axios
        .get(`${apiUrl}/get-rentals`, {
          params: {
            firebaseUid: firebaseUid,
          },
        })
        .then((response) => {
          setProperties(response.data);
        })
        .catch((error) => console.error('Error fetching rentals:', error));
    }
  }, [firebaseUid, apiUrl]);

  useEffect(() => {
    if (properties.length > 0) {
      const filtered = properties.filter((property) => {
        const propertyLocation = `${property.city}, ${property.state}`;
        return (
          (!location || propertyLocation === location) &&
          (!guests || property.numGuests >= parseInt(guests)) &&
          (pets === 'no' || (pets === 'yes' && property.terms.petsAllowed === 'yes'))

        );
      });
      setFilteredProperties(filtered);
      onFilteredProperties(filtered); // Pass filtered properties to parent
    }
  }, [properties, location, guests, pets, onFilteredProperties]);

  const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      style={{
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        cursor: 'pointer',
      }}
    >
      <ArrowBackIosIcon style={{ color: '#fff', fontSize: '18px' }} />
    </div>
  );

  const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      style={{
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        cursor: 'pointer',
      }}
    >
      <ArrowForwardIosIcon style={{ color: '#fff', fontSize: '18px' }} />
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <ul
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {dots}
      </ul>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Grid container spacing={4}>
      {filteredProperties.map((property) => (
        <Grid item xs={12} sm={6} key={property._id}>
          <Card className="card">
            <Box sx={{ position: 'relative', width: '100%' }}>
              <Slider {...sliderSettings} style={{ maxWidth: '500px' }}>
                {property.imageURLs.map((imageUrl, index) => (
                  <Box key={index} sx={{ width: '100%' }}>
                    <img
                      src={imageUrl}
                      alt={`Slide ${index}`}
                      style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
            <CardContent>
              <Typography className="type-label">{property.type}</Typography>
              <Typography
                style={{ marginBottom: '8px', marginTop: '10px', fontSize: '20px' }}
                variant="h5"
                component="div"
              >
                {property.title}
              </Typography>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FmdGoodIcon
                  style={{ marginRight: '5px', marginLeft: '-3px', color: 'rgb(204, 204, 204)', fontSize: '16px' }}
                />
                <Typography style={{ lineHeight: 'unset' }} variant="body2" color="text.secondary">
                  {property.city}, {property.state}
                </Typography>
              </div>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={6} sm={9}>
                  <Typography variant="body2" style={{ fontWeight: '500' }}>
                    Beds: {property.numBeds} · Guests: {property.numGuests} · Baths: {property.numBaths}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3} style={{ textAlign: 'right' }}>
                  <Typography variant="body1" style={{ fontWeight: '600' }}>
                    ${property.pricing.price}/{property.pricing.label}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {filteredProperties.length === 0 && (
        <Typography variant="h6" component="div" style={{ textAlign: 'center', width: '100%', paddingTop: '40px' }}>
          No properties match your search criteria.
        </Typography>
      )}
    </Grid>
  );
};

export default Properties;
