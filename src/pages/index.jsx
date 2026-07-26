import React, { useState } from "react";
import Head from "next/head";
import Home from "../components/HomePage/Home";
import Artist from "../components/artist/Artist";
import Booking from "./booking";
import Statistics from "../components/Statistics/statistics";
import styles from "./index.module.css";

const HomePage = () => {
  const [tattooPlan, setTattooPlan] = useState(null);

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
      <main className={styles.homepage}>
        {/* Hero Section or Main Homepage Content */}
        <section id="home" className={styles.heroSection}>
          <Home onPlanComplete={setTattooPlan} />
        </section>

        {/* Artist Section */}
        <section id="artist" className={styles.artistSection}>
          <Artist showBio={false} homepageVariant />
        </section>

        {/* Booking Section */}
        <section id="booking" className={styles.bookingSection}>
          <Booking
            showBackground={false}
            showReviewsButton={false}
            homepageVariant
            initialPlan={tattooPlan}
          />
        </section>

        {/* Statistics Section */}
        <section id="statistics" className={styles.statisticsSection}>
          <Statistics homepageVariant />
        </section>
      </main>
    </>
  );
};

export default HomePage;
