// Artist.jsx

// I need to get the artist data from the database

import React from "react";
import styles from "./Artist.module.css"; // Import the CSS module for styling
import artistsData from "../artistsData"; // Import the artistsData array
import Link from "next/link"; // Import Link from Next.js

const Artist = () => {
  // Use the artistsData array to populate the artists array
  const artists = artistsData.map((artistData) => ({
    name: artistData.name,
    imageUrl: artistData.imageUrl,
    bio: artistData.bio,
  }));

  return (
    <div>
      <h2 style={{ color: "red" }}>Son's of Ink</h2>
      <div className={styles.artistContainer}>
        {artists.map((artist, index) => (
          <div key={index} className={styles.artistCard}>
            <img
              src={artist.imageUrl}
              alt={artist.name}
              className={styles.artistImage}
            />
            <div className={styles.artistOverlay}>
              <h2 className={styles.artistName}>{artist.name}</h2>
              <div className={styles.buttonContainer}>
                <div className={styles["button-overlay"]}>
                  <Link href={`/${artist.name}`}>
                    <div
                      className={`${styles["round-button"]} ${styles["text-overlay"]}`}
                    >
                      View Gallery
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.artistBio}>
              <p>{artist.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
