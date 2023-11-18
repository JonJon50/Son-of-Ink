import React from "react";
import styles from "./Artist.module.css";
import artistsData from "../artistsData";
import Link from "next/link";

const Artist = ({ showBioSection = false }) => {
  return (
    <>
      <div className={styles.parallaxBackground} /> {/* Parallax Background */}
      <div className={styles.wholeContainer}>
        <h2 className={`text-center ${styles.artistTitle}`}>Artist</h2>
        
        {/* Conditionally render artist bios section */}
        {showBioSection && (
          <div className={styles.artistBios}>
            {artistsData.map((artist, index) => (
              <div key={index} className={styles.artistBio}>
                <div>{artist.bio}</div>
              </div>
            ))}
          </div>
        )}

        {/* Container for artist cards */}
        <div className={styles.artistContainer}>
          {artistsData.map((artist, index) => (
            <div key={index} className={styles.artistCard}>
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className={styles.artistImage}
              />
              <div className={styles.artistOverlay}>
                
                <h2 className={styles.artistName}>{artist.name}</h2>
                <div className={styles.buttonContainer}>
                  <Link href={`/${artist.name}`} passHref>
                    <div className={styles["round-button"]}>Gallery</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Artist;

