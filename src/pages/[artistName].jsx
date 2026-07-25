// [artistName].jsx
import React from "react";
import { useRouter } from "next/router";
import artistsData from "@/components/artistsData";
import Link from "next/link";
import styles from "./[artistName].module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

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

  const backgroundStyle = {
    backgroundImage: `url("${selectedArtist.imageUrl}")`,
  };
  // Define your animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <main className={styles.galleryPage}>
      {/* Background image */}
      <div className={styles.backgroundImage} style={backgroundStyle}></div>

      {/* Gallery content */}
      <div className={styles.galleryHeader}>
        {/* Artist name and booking button */}
        <Link href="/artist" className={styles.backLink}>
          Artist
        </Link>
        <h1 className={styles.artistName}>
          {selectedArtist.name}&apos;s Gallery
        </h1>
        <Link href="/booking" className={styles.bookingLink}>
          Book Now
        </Link>
      </div>

      {/* Gallery images */}
      <div className={styles.galleryContainer}>
        {selectedArtist.galleryImages.map((image, index) => (
          <motion.button
            key={index}
            className={styles.artistArt}
            variants={variants} // Pass the variants to the motion component
            initial="hidden" // Set the initial animation state
            animate="visible" // Set the target animation state
            transition={{ duration: 1, delay: index * 0.2 }} // Define the animation transition
            onClick={() => openLightbox(index)}
            whileHover="hover" // Specify the hover state variant
            whileTap="tap" // Specify the tap state variant
            type="button"
            aria-label={`Open ${selectedArtist.name} gallery image ${index + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={`${selectedArtist.name} tattoo ${index + 1}`}
            />
          </motion.button>
        ))}
      </div>

      {/* Lightbox component */}
      <Lightbox
        open={isOpen}
        close={() => setOpen(false)}
        slides={selectedArtist.galleryImages.map((image) => ({
          src: image.url,
        }))}
        currentIndex={selectedIndex}
      />
    </main>
  );
};

export default ArtistGalleryPage;
