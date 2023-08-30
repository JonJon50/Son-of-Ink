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
      background: `url("https://img.freepik.com/free-photo/tattoo-salon-process-tattoo-girl-stuffed-tattoo-process-stuffing-tattoo-body-hands-close-up_1321-3001.jpg?w=1800&t=st=1693420168~exp=1693420768~hmac=56663410eb92bd76b6980e489222e461de3a884e4bae83278a38772100edc9dc")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top', // Adjust the background position
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '60vh',
    };
  } else if (selectedArtist.name === 'Jonny') {
    backgroundStyle = {
      background: `url("https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1800&t=st=1693421685~exp=1693422285~hmac=0a579f5faddebd06bbef97a21db2ad00e88bcb057dc37706cc8bfd142a0989f5")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top', // Adjust the background position
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
        <div>
          {selectedArtist.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Gallery Image ${index}`}
              style={{ width: '100%', maxWidth: '300px', marginBottom: '20px' }}
            />
          ))}
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



