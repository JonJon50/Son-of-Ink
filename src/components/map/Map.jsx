// Map.js
import React, { useEffect, useState } from 'react';
import MapStyles from './Map.module.css';

const Map = () => {
  const defaultLocation = { lat: 38.6171, lng: -76.9178 }; // Replace with your desired coordinates
  const [userLocation, setUserLocation] = useState(defaultLocation);
  const [map, setMap] = useState(null);
  const officeAddress = '2181 Crain Hwy, Waldorf, MD 20601';

  // Load the Google Maps script dynamically
  const loadGoogleMaps = () => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.error('Failed to load Google Maps script.');
      };
      document.head.appendChild(script);
    } else {
      window.initMap(); // If already loaded, directly initialize
    }
  };

  useEffect(() => {
    window.initMap = function () {
      getLocationAndRenderMap(officeAddress);
    };

    loadGoogleMaps(); // Load Google Maps script
  }, [officeAddress]);

  useEffect(() => {
    const handleSuccess = (position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const handleError = (error) => {
      console.error('Geolocation error:', error.message);
      setUserLocation(defaultLocation); // Fallback to default location
    };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const getLocationAndRenderMap = (address) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
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
  };

  useEffect(() => {
    if (map && userLocation.lat && userLocation.lng) {
      drawDirections(map, userLocation, officeAddress);
    }
  }, [map, userLocation, officeAddress]);

  const drawDirections = (map, userLocation, destination) => {
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
        console.error('Directions request failed: ' + status);
        alert('Could not load directions: ' + status);
      }
    });
  };

  return (
    <div className={MapStyles.mapContainer}>
      <div id="map" style={{ width: '100%', height: '685px' }}></div>
    </div>
  );
};

export default Map;
