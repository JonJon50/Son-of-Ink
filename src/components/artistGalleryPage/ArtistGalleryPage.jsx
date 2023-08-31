import React from 'react';
import { useRouter } from 'next/router';
import styles from './ArtistGalleryPage.module.css';

const ArtistGalleryPage = ({ artistsData }) => {
  const router = useRouter();
  const { artistName } = router.query;

  const selectedArtist = artistsData.find(artist => artist.name === artistName);

  if (!selectedArtist) {
    return <div>Artist not found</div>;
  }

  // Ensure that selectedArtist.galleryImages has at least 15 images
  const galleryImages = selectedArtist.galleryImages.slice(0, 15);

  return (
    <div className={styles.galleryPage}>
      <h2 className={styles.galleryHeader}>{selectedArtist.name}'s Gallery</h2>
      <div className={styles.galleryImages}>
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            className={styles.galleryImage}
          />
        ))}
      </div>

      {/* Display images in a grid at the bottom of the page */}
      <div className={styles.gridContainer}>
        {selectedArtist.galleryImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            className={styles.gridImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistGalleryPage;



