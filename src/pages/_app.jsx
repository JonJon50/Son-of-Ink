// pages/_app.jxs

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/styles.css'; 
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Son of Ink | Tattoo Studio</title>
        <meta
          name="description"
          content="Son of Ink - Bringing your vision to life with personalized tattoos and exceptional client experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;



