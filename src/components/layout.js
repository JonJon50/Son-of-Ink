// src/app/layout.js

import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../app/globals.css'; // Updated import path for globals.css
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar /> {/* Add the Navbar component to the layout */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;




