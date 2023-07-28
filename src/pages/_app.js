// pages/_app.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../../styles/globals.module.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <div className="relative z-0 bg-primary"> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;

