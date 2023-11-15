// pages/artist.js

import React from "react";
import Artist from "../components/artist/Artist";

const ArtistPage = () => {
  return (
    <div>
      {/* Add any content specific to the artist page */}
      <Artist showBioSection={true} />
    </div>
  );
};

export default ArtistPage;
