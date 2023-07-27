// components/Navbar.jsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" py-4 text-black text-center">
      <div className="inline-flex space-x-4">
        <Link href="/">
          Home
        </Link>
        <Link href="/artist">
          Artist
        </Link>
        <Link href="/booking">
          Booking
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



