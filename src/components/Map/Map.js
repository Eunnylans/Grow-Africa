import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397, // Example latitude
  lng: 150.644, // Example longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAW3HtjZDmtsXGlGIpUTlVVZLPSf1q-930", // Replace with your valid API Key
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div style={{ position: "relative" }}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
