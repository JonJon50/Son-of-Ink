// ArtistGalleryPage.jsx


import React from 'react';
import { useRouter } from 'next/router';
import styles from './ArtistGalleryPage.module.css';

const ArtistGalleryPage = ({ artistsData }) => {
  const router = useRouter(); // Get the router instance
  const { artistName } = router.query;

  const selectedArtist = artistsData.find(artist => artist.name === artistName);
  console.log(selectedArtist)
  if (!selectedArtist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className={styles.galleryPage}>
      <h2 className={styles.galleryHeader}>{selectedArtist.name}'s Gallery</h2>
      <div className={styles.galleryImages}>
        {selectedArtist.galleryImages.map((image, index) => (
          <img key={index} src={image.url} alt={`Image ${index}`} className={styles.galleryImage} />
        ))}
      </div>
    </div>
  );
};

export default ArtistGalleryPage;



