import React, { useState } from 'react';
import PropertySearch from '@/app/components/PropertySearch';
import Navigation from '@/app/components/Navigation';
import '../styles/globals.css';
import Properties from '@/app/components/Properties';
import Map from '@/app/components/Map';

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // 2 equal columns
    gap: '1rem', // Adjust as needed
    marginTop:'25px',
  },
  rightColumn: {
    marginLeft: '20px',
  },

  '@media (max-width: 768px)': {
    // Media query for mobile devices
    gridContainer: {
      gridTemplateColumns: '1fr', // Single column on mobile
    },
    rightColumn: {
      display: 'none', // Hide the right column on mobile
    },
  },
};

const Results = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const firebaseUid = process.env.NEXT_PUBLIC_FIREBASE_UID;

  return (
    <>
      <Navigation apiUrl={apiUrl} firebaseUid={firebaseUid} />
      <PropertySearch apiUrl={apiUrl} firebaseUid={firebaseUid} />
      <div style={styles.gridContainer}>
        <div>
          <Properties
            apiUrl={apiUrl}
            firebaseUid={firebaseUid}
            onFilteredProperties={setFilteredProperties}
          />
        </div>
        <div style={styles.rightColumn}>
          <Map properties={filteredProperties} apiUrl={apiUrl} firebaseUid={firebaseUid} />
        </div>
      </div>
    </>
  );
};

export default Results;
