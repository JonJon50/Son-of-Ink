// components/Navbar.jsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/artist">Artist</Link>
        </li>
        <li>
          <Link href="/booking">Booking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

