import React from 'react';
import { useRouter } from 'next/router';
import artistsData from '@/components/artistsData';
import Link from 'next/link';
import styles from '../components/artistGalleryPage/../artist/Artist.module.css'; // Adjust the path as needed

const ArtistGalleryPage = () => {
  const router = useRouter();
  const { artistName } = router.query;

  // Find the artist data for the selected artist
  const selectedArtist = artistsData.find(artist => artist.name === artistName);

  if (!selectedArtist) {
    return <div>Artist not found</div>;
  }

  let backgroundStyle = {}; // Define background styles based on artistName
  if (selectedArtist.name === 'Theron') {
    backgroundStyle = {
      background: `url("${selectedArtist.imageUrl}")`, // Use the imageUrl from artistsData
      backgroundSize: 'cover',
      backgroundPosition: 'center top', // Adjust the background position
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '60vh',
    };
  } else if (selectedArtist.name === 'Jonny') {
    backgroundStyle = {
      background: `url("${selectedArtist.imageUrl}")`, // Use the imageUrl from artistsData
      backgroundSize: 'cover',
      backgroundPosition: 'center', // Adjust the background position for pic gallery
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '60vh',
    };
  }

  return (
    <div className="gallery-page" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="background-image" style={backgroundStyle}></div>
      <div className="gallery-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '1200px', width: '100%', padding: '20px' }}>
        <h2>{selectedArtist.name}'s Gallery</h2>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryImages}>
            {selectedArtist.galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Gallery Image ${index}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </div>
        <Link href="/booking">
          <button className={`${styles['round-button']} ${styles['text-overlay']}`} style={{ padding: '10px 20px' }}>
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistGalleryPage;



