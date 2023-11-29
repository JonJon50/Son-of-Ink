import React, { useEffect, useState } from 'react';
import MapStyles from './Map.module.css';



// Define defaultLocation outside of the component
function Map() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY; // Ensure this is set in your environment variables
  const [userLocation, setUserLocation] = useState({}); // Initialize state with defaultLocation
  const [map, setMap] = useState(null);
  const officeAddress = '2181 Crain Hwy, Waldorf, MD 20601';

  useEffect(() => {
    window.initMap = function () {
      getLocationAndRenderMap(officeAddress);
    };

    // Create a script element to load the Google Maps API
    const script = document.createElement('script');
    script.src = process.env.NEXT_PUBLIC_API_URL 
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [officeAddress, apiKey]);

  // Geolocation useEffect
  useEffect(() => {
    const handleSuccess = (position) => {
     
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const handleError = (error) => {
      console.error('Geolocation error:', error);
      setUserLocation(defaultLocation); // Fallback to default location
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Directions useEffect
  useEffect(() => {
    if (map && userLocation.lat && userLocation.lng) {
      drawDirections(map, userLocation, officeAddress);
    }
  }, [map, userLocation, officeAddress]);

  function getLocationAndRenderMap(address) {
    // Initialize the map with the given address
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        const newMap = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 15,
        });
        setMap(newMap);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  function drawDirections(map, userLocation, destination) {
    // Draw directions from the user's location to the destination
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    const request = {
      origin: userLocation,
      destination: destination,
      travelMode: 'DRIVING',
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });
  }

  return (
    <div className={MapStyles.mapContainer}>
      <div id="map" style={{ width: '100%', height: '685px' }}></div>
    </div>
  );
}

export default Map;
