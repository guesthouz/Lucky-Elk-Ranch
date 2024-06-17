import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Select, MenuItem, FormControl, InputLabel, IconButton, Grid, Typography, Radio, RadioGroup, FormControlLabel, InputAdornment, OutlinedInput } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { LicenseInfo } from '@mui/x-license-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import useRouter from './useRouter';

LicenseInfo.setLicenseKey('24835bbb2c4a878f6366f4fad4b3f3cbTz04MTk4MSxFPTE3MzY1NjM1MTYwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

const PropertySearch = ({ firebaseUid, apiUrl }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState('no');
  const [openGuestsDropdown, setOpenGuestsDropdown] = useState(false);
  const router = useRouter();

  function formatDate(date) {
    if (!date) return '';

    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  const handleSearch = () => {
    const formattedCheckIn = dateRange[0] ? formatDate(dateRange[0]) : '';
    const formattedCheckOut = dateRange[1] ? formatDate(dateRange[1]) : '';
    const guests = adults + children;

    router.push(`/results?location=${location}&checkIn=${formattedCheckIn}&checkOut=${formattedCheckOut}&guests=${guests}&pets=${pets}`);
  };

  useEffect(() => {
    if (firebaseUid && apiUrl) {
      axios
        .get(`${apiUrl}/get-rentals`, {
          params: {
            firebaseUid: firebaseUid,
          },
        })
        .then((response) => {
          const cityData = response.data.map((rental) => `${rental.city}, ${rental.state}`);
          setCities(cityData);

          if (cityData.length > 1) {
            setCities(['All Locations', ...cityData]);
          } else {
            setCities(cityData);
          }
        })
        .catch((error) => console.error('Error fetching cities:', error));
    }
  }, [firebaseUid, apiUrl]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setLocation(city === 'All Locations' ? '' : city);
  };

  const incrementAdults = (event) => {
    event.stopPropagation();
    setAdults(adults + 1);
  };

  const decrementAdults = (event) => {
    event.stopPropagation();
    setAdults(adults > 0 ? adults - 1 : 0);
  };

  const incrementChildren = (event) => {
    event.stopPropagation();
    setChildren(children + 1);
  };

  const decrementChildren = (event) => {
    event.stopPropagation();
    setChildren(children > 0 ? children - 1 : 0);
  };

  const incrementInfants = (event) => {
    event.stopPropagation();
    setInfants(infants + 1);
  };

  const decrementInfants = (event) => {
    event.stopPropagation();
    setInfants(infants > 0 ? infants - 1 : 0);
  };

  const handlePetsChange = (event) => {
    setPets(event.target.value);
  };

  const handleGuestsDropdownOpen = () => {
    setOpenGuestsDropdown(true);
  };

  const handleGuestsDropdownClose = () => {
    setOpenGuestsDropdown(false);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: 2,
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FormControl sx={{ flex: 1 }}>
          <InputLabel id="select-helper-label">Location</InputLabel>
          <Select
            labelId="select-helper-label"
            id="select-helper"
            label="Location"
            value={selectedCity}
            onChange={handleCityChange}
            input={
              <OutlinedInput
                id="location-input"
                startAdornment={
                  <InputAdornment position="start">
                    <PlaceIcon style={{color:'#b5b5b5'}} />
                    {!selectedCity && <p style={{marginLeft:'10px'}}>Location</p>}
                  </InputAdornment>
                }
                label="Location"
                inputProps={{
                  sx: { display: 'flex', alignItems: 'center' },
                }}
              />
            }
            renderValue={(selected) => (selected ? selected : "")}
          >
            {cities.map((city, index) => (
              <MenuItem disableRipple key={index} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
          <DateRangePicker
            className="date"
            localeText={{ start: 'Check-in', end: 'Check-out' }}
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
            slotProps={{
              textField: {
                start: { label: 'Check-in', variant: 'outlined' },
                end: { label: 'Check-out', variant: 'outlined' },
              },
            }}
          />
          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="guests-label">Guests</InputLabel>
            <Select
              labelId="guests-label"
              id="guests-select"
              label="Guests"
              open={openGuestsDropdown}
              onClose={handleGuestsDropdownClose}
              onOpen={handleGuestsDropdownOpen}
              value={`Guests: ${adults + children}, Infants: ${infants}`}
              renderValue={() => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon sx={{ mr: 1 }} style={{color:'#b5b5b5'}} />
                  <span style={{color:'#0000008A !important'}}>{adults + children === 0 ? 'Guests' : `Guests (${adults + children})`}</span>
                </Box>
              )}
            >
              <MenuItem disableRipple style={{ marginBottom: '15px', marginTop: '15px' }} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                <Grid container alignItems="center">
                  <Grid item xs={7}>
                    <Typography>Adults</Typography>
                  </Grid>
                  <Grid item xs={5} textAlign="center" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <IconButton onClick={decrementAdults} size="small" style={{ border: 'solid 1px #172b2f8f', color: '#172b2f8f' }}>
                      <RemoveIcon />
                    </IconButton>
                    <span style={{ display: 'inline-block', width: '20px', textAlign: 'center' }}>{adults}</span>
                    <IconButton onClick={incrementAdults} size="small" style={{ border: 'solid 1px #172b2f8f', color: '#172b2f8f' }}>
                      <AddIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem disableRipple style={{ marginBottom: '15px', marginTop: '15px' }} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                <Grid container alignItems="center">
                  <Grid item xs={7}>
                    <Typography>Children</Typography>
                    <Typography style={{ fontSize: '11px', color: '#9b9b9b' }}>Ages 2+</Typography>
                  </Grid>
                  <Grid item xs={5} textAlign="center" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <IconButton onClick={decrementChildren} size="small" style={{ border: 'solid 1px #172b2f8f', color: '#172b2f8f' }}>
                      <RemoveIcon />
                    </IconButton>
                    <span style={{ display: 'inline-block', width: '20px', textAlign: 'center' }}>{children}</span>
                    <IconButton onClick={incrementChildren} size="small" style={{ border: 'solid 1px #172b2f8f', color: '#172b2f8f' }}>
                      <AddIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem disableRipple style={{ marginBottom: '15px', marginTop: '15px' }} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                <Grid container alignItems="center">
                  <Grid item xs={7}>
                    <Typography>Infants</Typography>
                  </Grid>
                  <Grid item xs={5} textAlign="center" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <IconButton onClick={decrementInfants} size="small" style={{ border: 'solid 1px #172b2f8f', color: '#172b2f8f' }}>
                      <RemoveIcon />
                    </IconButton>
                    <span style={{ display: 'inline-block', width: '20px', textAlign: 'center' }}>{infants}</span>
                    <IconButton onClick={incrementInfants} size="small" style={{ border: 'solid 1px #172b2f8f', color: '#172b2f8f' }}>
                      <AddIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem disableRipple style={{ marginBottom: '15px', marginTop: '15px' }} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Typography>Pets</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="center" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <RadioGroup row value={pets} onChange={handlePetsChange}>
                      <FormControlLabel value="no" control={<Radio />} label="No" />
                      <FormControlLabel style={{ marginRight: '0' }} value="yes" control={<Radio />} label="Yes" />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            className="searchbutton"
            variant="contained"
            color="primary"
            sx={{ whiteSpace: 'nowrap', height: '55px', width: '115px', marginBottom: '1px' }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default PropertySearch;
