import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import axios from 'axios';
import useLink from './useLink';

const Navigation = ({ firebaseUid, apiUrl }) => {
  const [pages, setPages] = useState([]);
  const { Link } = useLink();

  useEffect(() => {
    if (firebaseUid) {
      axios.get(`${apiUrl}/get-pages?firebaseUid=${firebaseUid}`)
        .then(response => {
          setPages(response.data.pages);
        })
        .catch(error => {
          console.error('Error getting pages:', error);
        });
    }
  }, [firebaseUid, apiUrl]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>Logo</Link>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {pages.map((page, index) => {
          const path = page.name.toLowerCase() === 'home' ? '/' : page.path;
          return (
            <Link href={path} passHref key={index}>{page.name}</Link>
          );
        })}
        <Button style={{ marginLeft: '20px' }} variant="outlined" color="inherit">
          Book Now
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

