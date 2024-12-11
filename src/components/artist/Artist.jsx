import React from "react";
import styles from "./Artist.module.css";
import artistsData from "../artistsData";
import Link from "next/link";
import { motion } from "framer-motion";

const Artist = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const bioVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <div className={styles.parallaxBackground} /> {/* Parallax Background */}
      <div className={styles.wholeContainer}>
        <h2 className={`text-center ${styles.artistTitle}`}>Artist</h2>

        {/* Artist Cards with Bio */}
        <motion.div
          className={styles.artistContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {artistsData.map((artist) => (
            <div key={artist.id} className={styles.artistCardWrapper}>
              {/* Animated Artist Bio */}
              <motion.div className={styles.artistBio} variants={bioVariants}>
                {artist.bio}
              </motion.div>

              {/* Animated Artist Card */}
              <motion.div className={styles.artistCard} variants={cardVariants}>
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className={styles.artistImage}
                />
                <div className={styles.artistOverlay}>
                  <h2 className={styles.artistName}>{artist.name}</h2>
                  <div className={styles.buttonContainer}>
                    <Link href={`/${artist.name}`} passHref>
                      <motion.div
                        className={styles["round-button"]}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Gallery
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Artist;
