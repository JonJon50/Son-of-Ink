// src/app/layout.js
import React from 'react';
import '../app/globals.css'; // Updated import path for globals.css
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sons of Ink',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;



