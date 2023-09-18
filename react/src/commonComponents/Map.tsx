import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Map: React.FC<MapProps> = ({ location }) => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
