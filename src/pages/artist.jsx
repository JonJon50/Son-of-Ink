// pages/artist.js

import React from "react";
import Artist from "../components/artist/Artist";
import styles from "./artist.module.css";

const ArtistPage = () => {
  return (
    <main className={styles.artistPage}>
      {/* Add any content specific to the artist page */}
      <Artist showBioSection={true} directoryVariant />
    </main>
  );
};

export default ArtistPage;
