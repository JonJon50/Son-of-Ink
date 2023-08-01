// components/ArtistGallery.jsx
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';


const DynamicLightGallery = dynamic(() => import('lightgallery'), { ssr: false });
const DynamicLgZoom = dynamic(() => import('lg-zoom'), { ssr: false });

const ArtistGallery = ({ artists }) => {
  useEffect(() => {
    // Initialize lightgallery for each artist on component mount
    artists.forEach((artist) => {
      DynamicLightGallery(document.getElementById(`${artist.name}-gallery`), {
        plugins: [DynamicLgZoom],
      });
    });
  }, [artists]);

  return null; // This component doesn't render anything directly
};

export default ArtistGallery;


