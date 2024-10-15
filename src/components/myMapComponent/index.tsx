import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";

// Definindo as coordenadas da localização fictícia
const location = {
  lat: -15.7801, // Latitude fictícia
  lng: -47.9292, // Longitude fictícia
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const MyMapComponent: React.FC = () => {
  return (
    <MapContainer>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={10}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </MapContainer>
  );
};

export default MyMapComponent;
