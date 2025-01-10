import React, { useEffect, useState } from 'react';
import MapStyles from './Map.module.css';

const Map = () => {
  const defaultLocation = { lat: 38.6171, lng: -76.9178 }; // Office location
  const [map, setMap] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const officeAddress = '2181 Crain Hwy, Waldorf, MD 20601';

  const loadGoogleMaps = () => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;

      // Handle script load error
      script.onerror = () => {
        console.error('Failed to load the Google Maps script.');
        alert('Failed to load Google Maps. Please check your connection or API key.');
      };

      document.head.appendChild(script);
    } else {
      window.initMap();
    }
  };

  const getUserLocation = (callback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          callback(userLocation);
        },
        (error) => {
          console.error('Geolocation error:', error);
          alert('Unable to access your location. Please enable location services.');
          callback(null); // Return null if geolocation fails
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      callback(null);
    }
  };

  useEffect(() => {
    window.initMap = function () {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: officeAddress }, (results, status) => {
        if (status === 'OK') {
          const officeLocation = results[0].geometry.location;
          const mapInstance = new google.maps.Map(document.getElementById('map'), {
            center: officeLocation,
            zoom: 15,
          });

          setMap(mapInstance);

          // Add a marker for the office
          new google.maps.Marker({
            position: officeLocation,
            map: mapInstance,
            title: 'Office Location',
          });

          // Initialize DirectionsRenderer
          const directionsService = new google.maps.DirectionsService();
          const directionsRendererInstance = new google.maps.DirectionsRenderer();
          directionsRendererInstance.setMap(mapInstance);
          setDirectionsRenderer(directionsRendererInstance);

          // Fetch user location and display directions
          getUserLocation((userLocation) => {
            if (userLocation) {
              const request = {
                origin: userLocation,
                destination: officeLocation,
                travelMode: 'DRIVING',
              };
              directionsService.route(request, (result, status) => {
                if (status === 'OK') {
                  directionsRendererInstance.setDirections(result);
                } else {
                  console.error('Directions request failed:', status);
                }
              });
            }
          });
        } else {
          console.error('Geocode failed:', status);
          alert('Failed to load map for the provided address.');
        }
      });
    };

    loadGoogleMaps();

    // Cleanup script and resources on unmount
    return () => {
      setMap(null);
      setDirectionsRenderer(null);
    };
  }, []);

  return (
    <div
      id="map"
      className={MapStyles.mapContainer}
      style={{ width: '100%', height: '685px' }}
    >
      Map loading...
    </div>
  );
};

export default Map;
