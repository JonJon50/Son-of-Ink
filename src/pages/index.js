// pages/index.js
import React from 'react';
import Home from '../components/HomePage/Home'; // Adjust the path accordingly
import Navbar from '../components/Navbar'; // Adjust the path accordingly
// import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default HomePage;

