// Artist.jsx

import React from 'react';
import styles from './Artist.module.css'; // Import the CSS module for styling
import ArtistGallery from '../components/ArtistGallery'; // Import the ArtistGallery component

const Artist = () => {
  const artists = [
    {
      name: 'Theron',
      imageUrl: '/Assets/Theron.png',
      bio: "I'm Artist 1. Ut commodo pharetra nisi a egestas. In et tincidunt mauris. Nullam condimentum auctor velit, ac consequat mauris tempus vel. Praesent lacinia vel mauris non malesuada. Nulla facilisi. Curabitur sit amet nunc eu odio efficitur luctus eu vel arcu.",
    },
    {
      name: 'Jonny',
      imageUrl: '/Assets/Johnny.png',
      bio: "I'm Artist 2. Ut commodo pharetra nisi a egestas. In et tincidunt mauris. Nullam condimentum auctor velit, ac consequat mauris tempus vel. Praesent lacinia vel mauris non malesuada. Nulla facilisi. Curabitur sit amet nunc eu odio efficitur luctus eu vel arcu.",
    },
    // Add more artists if needed
  ];

  return (
    <div>
    <h2 style={{ color: 'red' }}>Son's of Ink</h2>
    <div className={styles.artistContainer}>
      {artists.map((artist, index) => (
        <div key={index} className={styles.artistCard}>
          <img src={artist.imageUrl} alt={artist.name} className={styles.artistImage} />
          <div className={styles.artistOverlay}>
            <h2 className={styles.artistName}>{artist.name}</h2>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles['button-overlay']}>
              <button
                className={`${styles['round-button']} ${styles['text-overlay']}`}
                onClick={() => DynamicLightGallery(document.getElementById(`${artist.name}-gallery`))}

              >
                View Gallery
              </button>
            </div>
          </div>
          <div className={styles.artistBio}>
            <p>{artist.bio}</p>
          </div>
          <div id={`${artist.name}-gallery`} style={{ display: 'none' }}>
            {/* Add your gallery images here */}
            {/* Example: */}
            {/* <a href="/path/to/image1.jpg">
              <img src="/path/to/thumbnail1.jpg" alt="Image 1" />
            </a> */}
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Artist;

