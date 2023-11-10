import React, { useEffect, useState } from 'react';
import MapStyles from './Map.module.css';


function Map() {
  // Define the apiKey outside of the useEffect block
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);
  const officeAddress = '2181 Crain Hwy, Waldorf, MD 20601';

  useEffect(() => {
    // This function needs to be on the window object to be accessible by the Google Maps script
    window.initMap = function () {
      getLocationAndRenderMap(officeAddress);
    };

    // Dynamically insert the Google Maps script tag with a callback to initMap
    const script = document.createElement('script');
    script.src = process.env.NEXT_PUBLIC_API_URL;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [officeAddress, apiKey]);

  // Get the user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        alert('Error getting your location. ' + err.message);
      }
    );
  }, []);

  // Once the user location and map are set, draw the directions
  useEffect(() => {
    if (map && userLocation) {
      drawDirections(map, userLocation, officeAddress);
    }
  }, [map, userLocation, officeAddress]);

  function getLocationAndRenderMap(address) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 15,
        });
        setMap(map);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  function drawDirections(map, userLocation, destination) {
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