import React from "react";
import Image from "next/image";
import styles from "./Artist.module.css";
import artistsData from "../artistsData";
import Link from "next/link";
import { motion } from "framer-motion";

const ARTIST_IMAGE_DIMENSIONS = {
  "/Assets/d.png": { width: 932, height: 1162 },
  "/Assets/douglas.png": { width: 1013, height: 1009 },
};

const Artist = ({ homepageVariant = false, directoryVariant = false }) => {
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
      <div
        className={`${styles.parallaxBackground} ${
          homepageVariant ? styles.homepageParallax : ""
        } ${directoryVariant ? styles.directoryParallax : ""}`}
      />{" "}
      {/* Parallax Background */}
      <div
        className={`${styles.wholeContainer} ${
          homepageVariant ? styles.homepageContainer : ""
        } ${directoryVariant ? styles.directoryContainer : ""}`}
      >
        <h2 className={`text-center ${styles.artistTitle}`}>Artist</h2>

        {/* Artist Cards with Bio */}
        <motion.div
          className={`${styles.artistContainer} ${
            homepageVariant ? styles.homepageArtistContainer : ""
          } ${directoryVariant ? styles.directoryArtistContainer : ""}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {artistsData.map((artist) => (
            <div
              key={artist.id}
              className={`${styles.artistCardWrapper} ${
                homepageVariant ? styles.homepageArtistWrapper : ""
              } ${directoryVariant ? styles.directoryArtistWrapper : ""}`}
            >
              {/* Animated Artist Bio */}
              <motion.div
                className={`${styles.artistBio} ${
                  homepageVariant ? styles.homepageArtistBio : ""
                } ${directoryVariant ? styles.directoryArtistBio : ""}`}
                variants={bioVariants}
              >
                {artist.bio}
              </motion.div>

              {/* Animated Artist Card */}
              <motion.div
                className={`${styles.artistCard} ${
                  homepageVariant ? styles.homepageArtistCard : ""
                } ${directoryVariant ? styles.directoryArtistCard : ""}`}
                variants={cardVariants}
              >
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  className={`${styles.artistImage} ${
                    homepageVariant ? styles.homepageArtistImage : ""
                  } ${directoryVariant ? styles.directoryArtistImage : ""}`}
                  width={ARTIST_IMAGE_DIMENSIONS[artist.imageUrl]?.width}
                  height={ARTIST_IMAGE_DIMENSIONS[artist.imageUrl]?.height}
                  sizes="(max-width: 750px) 100vw, 50vw"
                />
                <div
                  className={`${styles.artistOverlay} ${
                    homepageVariant ? styles.homepageArtistOverlay : ""
                  } ${directoryVariant ? styles.directoryArtistOverlay : ""}`}
                >
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
