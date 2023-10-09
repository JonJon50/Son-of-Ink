// pages/_app.js

import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/styles.css'; // Include your global styles

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;


