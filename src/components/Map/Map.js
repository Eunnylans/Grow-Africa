import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -34.397, // Example latitude
    lng: 150.644, // Example longitude
  };

  const handleLoad = () => {
    setMapLoaded(true);
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      onLoad={handleLoad}
    >
      {mapLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>Loading Map...</div>
      )}
    </LoadScript>
  );
};

export default Map;
