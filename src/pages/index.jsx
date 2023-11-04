// pages/index.js
import React from 'react';
import Home from '../components/HomePage/Home'; // Adjust the path accordingly
import Navbar from '../components/Navbar'; // Adjust the path accordingly
import Artist from "../components/artist/Artist"
import Booking from './booking'
// import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div>
      <Home />
      <Artist/>
      <Booking />      
    </div>
  );
};

export default HomePage;

