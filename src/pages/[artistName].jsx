// [artistName].js

import React from "react";
import { useRouter } from "next/router";
import artistsData from "@/components/artistsData"; // Import the artist data array
import Link from "next/link";
import styles from "../components/artist/Artist.module.css"; // Import the CSS module (Adjust the path as needed)

// Define the ArtistGalleryPage component
const ArtistGalleryPage = () => {
  const router = useRouter();
  const { artistName } = router.query; // Get the artistName from the router query

  // Find the artist data for the selected artist
  const selectedArtist = artistsData.find(
    (artist) => artist.name === artistName
  );

  if (!selectedArtist) {
    return <div>Artist not found</div>;
  }

  // Define background styles based on artistName
  let backgroundStyle = {};
  if (selectedArtist.name === "Theron") {
    backgroundStyle = {
      background: `url("${selectedArtist.imageUrl}")`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "60vh",
    };
  } else if (selectedArtist.name === "Art") {
    backgroundStyle = {
      background: `url("${selectedArtist.imageUrl}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "60vh",
    };
  }

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
          top: "9%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "1200px",
          width: "100%",
          padding: "20px",
        }}
      >
        {/* Artist name and booking button */}
        <h2
          className={`${styles.artistName} ${
            selectedArtist.name === "Theron" ? styles.theronText : ""
          } ${selectedArtist.name === "Art" ? styles.artText : ""}`}
        >
          {selectedArtist.name}'s Gallery
        </h2>
        <Link href="/booking">
          <button
            className={`${styles["round-button"]} ${styles["text-overlay"]}`}
            style={{ padding: "10px 20px" }}
          >
            Book Now
          </button>
        </Link>
      </div>
      {/* Gallery images */}
      <div className={styles.galleryContainer}>
        <div className={styles.galleryImages}>
          {selectedArtist.galleryImages.length > 0 ? (
            selectedArtist.galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Gallery Image ${index}`}
                className={styles.artistArt}
              />
            ))
          ) : (
            <div className={styles.noImages}> Artwork coming soon! </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the ArtistGalleryPage component
export default ArtistGalleryPage;
