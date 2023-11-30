import React from "react";
import styles from "./Artist.module.css";
import artistsData from "../artistsData";
import Link from "next/link";
import { motion } from 'framer-motion';
const Artist = ({ showBioSection = false }) => {

  const bioVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <div className={styles.parallaxBackground} /> {/* Parallax Background */}
      <div className={styles.wholeContainer}>
        <h2 className={`text-center ${styles.artistTitle}`}>Artist</h2>

        {/* Conditionally render artist bios section */}
        {showBioSection && (
            <div className={styles.artistBios}>
            {artistsData.map((artist) => (
              // Use a unique piece of data for the key, such as an id
              <motion.div 
                key={artist.id} 
                className={styles.artistBio}
                variants={bioVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 * artistsData.indexOf(artist) }}
              >
                {artist.bio}
              </motion.div>
            ))}
          </div>
        )}

        {/* Container for artist cards */}
        <div className={styles.artistContainer}>
          {artistsData.map((artist) => (
            <div key={artist.id} className={styles.artistCard}>
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
