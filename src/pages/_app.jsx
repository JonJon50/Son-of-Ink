// pages/_app.jxs

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer'
import '../styles/styles.css'; // Include your global styles

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;


