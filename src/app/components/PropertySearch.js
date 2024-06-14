// PropertySearch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
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
  const [guests, setGuests] = useState('');
  const router = useRouter();

  function formatDate(date) {
    if (!date) return '';
  
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }

  const handleSearch = () => {
    // Format dates to a suitable string format if they exist
    const formattedCheckIn = dateRange[0] ? formatDate(dateRange[0]) : '';
    const formattedCheckOut = dateRange[1] ? formatDate(dateRange[1]) : '';

    router.push(`/results?location=${location}&checkIn=${formattedCheckIn}&checkOut=${formattedCheckOut}&guests=${guests}`);
  };

  useEffect(() => {
    if (firebaseUid && apiUrl) {
      axios.get(`${apiUrl}/get-rentals`, {
        params: {
          firebaseUid: firebaseUid,
        },
      })
        .then(response => {
          const cityData = response.data.map(rental => `${rental.city}, ${rental.state}`);
          setCities(cityData);
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [firebaseUid, apiUrl]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
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
            >
              {cities.map((city, index) => (
                <MenuItem key={index} value={city}>{city}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <DateRangePicker
            className='date'
            localeText={{ start: 'Check-in', end: 'Check-out' }}
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
            slotProps={{
              textField: {
                start: { label: 'Check-in', variant: 'outlined' },
                end: { label: 'Check-out', variant: 'outlined' }
              }
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            className='searchbutton'
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
