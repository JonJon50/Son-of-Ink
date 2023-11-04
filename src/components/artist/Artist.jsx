// Artist.jsx

// Import necessary modules and components
import React from "react";
import styles from "./Artist.module.css"; // Import the CSS module for styling
import artistsData from "../artistsData"; // Import the artistsData array
import Link from "next/link"; // Import Link from Next.js

// Define the Artist functional component
const Artist = () => {
  // Use the artistsData array to populate the artists array
  const artists = artistsData.map((artistData) => ({
    name: artistData.name,
    imageUrl: artistData.imageUrl,
    bio: artistData.bio,
  }));

  return (
    <div className={styles.wholeContainer}>
      {/* Header */}

      <h2 className={`text-center ${styles.artistTitle}`}>Artists</h2>
      
      {/* Container for artist cards */}
      <div className={`${styles.artistContainer} ms-3 me-3`}>
        {artists.map((artist, index) => (
          <div key={index} className={styles.artistCard}>
            {/* Artist image */}
            <img
              src={artist.imageUrl}
              alt={artist.name}
              className={styles.artistImage}
            />
            
            {/* Artist overlay */}
            <div className={styles.artistOverlay}>
              <h2 className={styles.artistName}>{artist.name}</h2>
              
              {/* Button container */}
              <div className={styles.buttonContainer}>
                <div className={styles["button-overlay"]}>
                  {/* Link to artist's gallery */}
                  <Link href={`/${artist.name}`}>
                    <div
                      className={`${styles["round-button"]}`}
                    >
                      View Gallery
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Artist bio */}
            <div className={styles.artistBio}>
              <p>{artist.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Artist component for use in other parts of the application
export default Artist;
