// pages/index.js
import React from "react";
import Home from "../components/HomePage/Home"; 
import Artist from "../components/artist/Artist";
import Booking from "./booking";

const HomePage = () => {
  return (
    <main>
      {/* Hero Section or Main Homepage Content */}
      <section id="home">
        <Home />
      </section>

      {/* Artist Section */}
      <section id="artist">
        <Artist showBio={false} />
      </section>

      {/* Booking Section */}
      <section id="booking">
        <Booking showBackground={false} showReviewsButton={false} />
      </section>

    </main>
  );
};

export default HomePage;
