// pages/_app.jxs

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer'
import '../styles/styles.css'; // Include your global styles
import 'tailwindcss/tailwind.css'; // If you're using Tailwind CSS from node_modules

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


