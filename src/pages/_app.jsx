// pages/_app.jxs

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/styles.css'; // Include your global styles
import 'tailwindcss/tailwind.css'; // If you're using Tailwind CSS from node_modules


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Son of Ink | Tattoo Studio</title>
        <meta
          name="description"
          content="Son of Ink - Bringing your vision to life with personalized tattoos and exceptional client experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
  </>
  );
};

export default MyApp;


