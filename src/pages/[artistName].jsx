import React from 'react';
import { useRouter } from 'next/router';
import artistsData from '@/components/artistsData'; // Adjust the import path as necessary
import Link from 'next/link';
import styles from '../components/artist/Artist.module.css'; // Adjust the import path as necessary
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Define the ArtistGalleryPage component
const ArtistGalleryPage = () => {
  const router = useRouter();
  const { artistName } = router.query; // Get the artistName from the router query

  // Find the artist data for the selected artist
  const selectedArtist = artistsData.find(
    (artist) => artist.name.toLowerCase() === artistName?.toLowerCase()
  );

  // Lightbox state
  const [isOpen, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Function to open lightbox at the selected index
  const openLightbox = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  // Error handling if artist is not found
  if (!selectedArtist) {
    return <div>Artist not found</div>;
  }

  // Background style configuration moved here for clarity
  const backgroundStyle = {
    background: `url("${selectedArtist.imageUrl}") no-repeat center top / cover`,
    width: '100vw',
    height: '60vh',
  };

  return (
    <div className="gallery-page" style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Background image */}
      <div className="background-image" style={backgroundStyle}></div>

      {/* Gallery content */}
      <div
        className="gallery-content"
        style={{
          position: 'absolute',
          top: '9%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '1200px',
          width: '100%',
          padding: '20px',
        }}
      >
        {/* Artist name and booking button */}
        <h2
          className={`${styles.artistName} ${
            selectedArtist.name === 'Theron' ? styles.theronText : ''
          } ${selectedArtist.name === 'Art' ? styles.artText : ''}`}
        >
          {selectedArtist.name}'s Gallery
        </h2>
        <Link href="/booking">
  <button
    className={`${styles['round-button']} ${styles['text-overlay']}`}
    style={{ padding: '10px 20px' }}
  >
    Book Now
  </button>
</Link>

      </div>

      {/* Gallery images */}
      <div className={styles.galleryContainer}>
        {selectedArtist.galleryImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Gallery Image ${index}`}
            className={styles.artistArt}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox component */}
      <Lightbox
        open={isOpen}
        close={() => setOpen(false)}
        slides={selectedArtist.galleryImages.map((image) => ({ src: image.url }))}
        currentIndex={selectedIndex}
      />
    </div>
  );
};

export default ArtistGalleryPage;
