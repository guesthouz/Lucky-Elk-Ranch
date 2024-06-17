import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import stylesheet for map styling
import { Card, CardContent, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { renderToString } from 'react-dom/server';
import axios from 'axios';

const Map = ({ properties, firebaseUid, apiUrl }) => {
    const mapContainerRef = useRef(null);

    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3Vlc3Rob3V6IiwiYSI6ImNseGM5NXBiaDA5MXgyam9hczVrZm4yczUifQ.B-g5crr7qsNOi39V7T0xoA';

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/guesthouz/clxca6f5a04wx01qm9wuo0mw8',
            zoom: 3
        });

        const bounds = new mapboxgl.LngLatBounds();

        if (properties && properties.length > 0) {
            const propertiesWithCoordsPromises = properties.map(property => {
                const address = `${property.address}, ${property.city}, ${property.state}`;
                return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`)
                    .then(geocodeResponse => {
                        if (geocodeResponse.data.features.length > 0) {
                            const coords = geocodeResponse.data.features[0].center;
                            return { ...property, coords: { lng: coords[0], lat: coords[1] } };
                        }
                        return property;
                    });
            });

            Promise.all(propertiesWithCoordsPromises)
                .then(propertiesWithCoords => {
                    propertiesWithCoords.forEach(property => {
                        if (property.coords) {
                            const popupContent = renderToString(
                                <Card className="mapcard">
                                    <Box sx={{ position: 'relative', width: '100%' }}>
                                        <Slider>
                                            {property.imageURLs.map((imageUrl, index) => (
                                                <Box key={index} sx={{ width: '100%' }}>
                                                    <img src={imageUrl} alt={`Slide ${index}`} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                                                </Box>
                                            ))}
                                        </Slider>
                                    </Box>
                                    <CardContent>
                                        <Typography className='type-label map-label'>
                                            {property.type}
                                        </Typography>
                                        <Typography variant="h5" style={{ marginBottom: '8px', marginTop:'8px', fontSize: '16px' }}>
                                            {property.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {property.numBeds} BR · {property.numBaths} BA · Sleeps: {property.numGuests}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            );

                            const marker = new mapboxgl.Marker({ "color": "#172b2f" })
                                .setLngLat([property.coords.lng, property.coords.lat])
                                .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent))
                                .addTo(map);

                            bounds.extend([property.coords.lng, property.coords.lat]);
                        }
                    });

                    if (!bounds.isEmpty()) {
                        map.fitBounds(bounds, { padding: 200, duration:3000, maxZoom:10 });
                    }
                });
        }

        return () => map.remove();
    }, [properties, firebaseUid, apiUrl]); // Ensure useEffect is correctly triggered with dependencies

    return <div className="map-container" ref={mapContainerRef} style={{ height: '700px' }} />;
};

export default Map;
