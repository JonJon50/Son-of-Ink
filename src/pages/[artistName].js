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
      background: `url("${selectedArtist.imageUrl}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '60vh',
    };
  } else if (selectedArtist.name === 'Jonny') {
    backgroundStyle = {
      background: `url("${selectedArtist.imageUrl}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '60vh',
    };
  }

  return (
    <div className="gallery-page" style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="background-image" style={backgroundStyle}></div>
      <div className="gallery-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '1200px', width: '100%', padding: '20px' }}>
        {/* Apply the artist name text style */}
        <h2 className={`${styles.artistName} ${selectedArtist.name === 'Theron' ? styles.theronText : ''}`}>
          {selectedArtist.name}'s Gallery
        </h2> 
        <Link href="/booking">
          <button className={`${styles['round-button']} ${styles['text-overlay']}`} style={{ padding: '10px 20px' }}>
            Book Now
          </button>
        </Link>
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
       </div>
    </div>
  );
};

export default ArtistGalleryPage;




