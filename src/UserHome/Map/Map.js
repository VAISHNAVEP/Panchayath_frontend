import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import Header from "../Header/Header";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const [location, setLocation] = useState({
    lat: 11.2342,
    lng: 75.818069,
    address: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyC3f6z6pt8SuV46H6x3qku_aIbZ3usFYQs`
        );

        const address =
          response.data.results[0]?.formatted_address || "Address not found";

        setLocation((prevLocation) => ({
          ...prevLocation,
          address,
        }));
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    fetchData();
  }, [location.lat, location.lng]);

  const defaultProps = {
    center: {
      lat: location.lat,
      lng: location.lng,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Header />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC3f6z6pt8SuV46H6x3qku_aIbZ3usFYQs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
