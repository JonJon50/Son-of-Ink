// components/Navbar.jsx

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} py-4 text-black text-center position-fixed`}>
      <div className="inline-flex space-x-4">
        <Link href="/">
          Home
        </Link>
        {/* Link directly to the /artist route */}
        <Link href="/artist">
          Artists
        </Link>
        <Link href="/booking">
          Booking
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



