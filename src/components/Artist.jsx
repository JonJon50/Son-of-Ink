import React from 'react';
import styles from './Artist.module.css'; // Import the CSS module for styling

const generateLoremIpsum = (paragraphs) => {
  // Replace this with your desired Lorem Ipsum text
  // ... (same as previous code)
};

const Artist = () => {
  const artists = [
    {
      name: 'Theron',
      imageUrl: '/Assets/Theron.png',
      bio: "I'm Artist 2. Ut commodo pharetra nisi a egestas. In et tincidunt mauris. Nullam condimentum auctor velit, ac consequat mauris tempus vel. Praesent lacinia vel mauris non malesuada. Nulla facilisi. Curabitur sit amet nunc eu odio efficitur luctus eu vel arcu.",
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
      <h1 className={styles.contentContainer}>Artists Page</h1>
      <div className={styles.artistContainer}>
        {artists.map((artist, index) => (
          <div key={index} className={styles.artistCard}>
            <img src={artist.imageUrl} alt={artist.name} className={styles.artistImage} />
            <div className={styles.artistBio}>
              <h2>{artist.name}</h2>
              <p>{artist.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;

