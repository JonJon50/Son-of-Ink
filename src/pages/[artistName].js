import React from 'react';
import { useRouter } from 'next/router';
import artistsData from '@/components/artistsData';
import Link from 'next/link';

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
      background: `url("/Assets/gallery_bg.png")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    };
  } else if (selectedArtist.name === 'Jonny') {
    backgroundStyle = {
      background: `url("/images/jonny-background.jpg")`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
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
          <button style={{ padding: '10px 20px', background: '#333', color: '#fff', border: 'none' }}>
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistGalleryPage;



