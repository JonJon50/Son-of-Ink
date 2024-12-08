// Map.jsx
import React, { useEffect, useState } from 'react';
import MapStyles from './Map.module.css';

const Map = () => {
  const defaultLocation = { lat: 38.6171, lng: -76.9178 }; // Replace with your desired coordinates
  const [map, setMap] = useState(null);
  const officeAddress = '2181 Crain Hwy, Waldorf, MD 20601';

  const loadGoogleMaps = () => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&callback=initMap`;
      ("API Key from Environment Variables:", process.env.NEXT_PUBLIC_API_KEY);

      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      window.initMap();
    }
  };

  useEffect(() => {
    window.initMap = function () {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: officeAddress }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          const mapInstance = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 15,
          });
          setMap(mapInstance);

          // Add a marker
          new google.maps.Marker({
            position: location,
            map: mapInstance,
            title: 'Office Location',
          });
        } else {
          console.error('Geocode failed:', status);
          alert('Failed to load map for the provided address.');
        }
      });
    };

    loadGoogleMaps();
  }, []);

  return <div id="map" className={MapStyles.mapContainer} style={{ width: '100%', height: '685px' }}></div>;
};

export default Map;
