// [artistName].jsx
import React from "react";
import { useRouter } from "next/router";
import artistsData from "@/components/artistsData";
import Link from "next/link";
import styles from "../components/artist/Artist.module.css";
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

  // Background style configuration moved here for clarity
  const backgroundStyle = {
    background: `url("${selectedArtist.imageUrl}") no-repeat center top / cover`,
    width: "100vw",
    height: "80vh",
  };
  // Define your animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div
      className="gallery-page"
      style={{ overflow: "hidden", position: "relative" }}
    >
      {/* Background image */}
      <div className="background-image" style={backgroundStyle}></div>

      {/* Gallery content */}
<div
  className="gallery-content"
  style={{
    position: "absolute",
    top: "12%", // Adjust positioning from the top for better alignment
    left: "50%", // Center horizontally by default
    transform: "translate(-50%, 0)", // Adjust horizontal alignment and remove vertical centering
    maxWidth: "1200px",
    width: "90%", // Ensure responsive width for smaller screens
    padding: "20px", // Reduce padding for better mobile fit
    textAlign: "center", // Center-align text for consistent mobile display
  }}
>
        {/* Artist name and booking button */}
        <h2
          className={`${styles.artistName}`}
          style={{
            color: "#ffffff", // Set the text color to white
            fontSize: "1.8rem", // Adjust font size for smaller screens
            marginBottom: "10px", // Add space between the name and button
          }}
        >
          {selectedArtist.name}'s Gallery
        </h2>
        <Link href="/booking">
          <button
            className={`${styles["round-button"]}`}
            style={{
              padding: "10px 20px", // Adjust padding for the button
              fontSize: "1rem", // Ensure button text is readable
              marginTop: "10px", // Add spacing from the text
              textAlign: "center", // Center-align the button content
              color: "#ffffff", // Set button text color to white
              borderColor: "#ffffff", // Set border color to white
              backgroundColor: "transparent", // Make the button transparent
            }}
          >
            Book Now
          </button>
        </Link>

</div>


      {/* Gallery images */}
      <div className={styles.galleryContainer}>
        {selectedArtist.galleryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image.url}
            alt={`Gallery Image ${index}`}
            className={styles.artistArt}
            variants={variants} // Pass the variants to the motion component
            initial="hidden" // Set the initial animation state
            animate="visible" // Set the target animation state
            transition={{ duration: 1, delay: index * 0.2 }} // Define the animation transition
            onClick={() => openLightbox(index)}
            whileHover="hover" // Specify the hover state variant
            whileTap="tap" // Specify the tap state variant
          />
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
    </div>
  );
};

export default ArtistGalleryPage;
