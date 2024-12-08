// pages/index.js
import React from "react";
import Head from "next/head";
import Home from "../components/HomePage/Home";
import Artist from "../components/artist/Artist";
import Booking from "./booking";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Son of Ink | Home</title>
        <meta
          name="description"
          content="Son of Ink - Bringing your vision to life with personalized tattoos and exceptional client experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
};

export default HomePage;

