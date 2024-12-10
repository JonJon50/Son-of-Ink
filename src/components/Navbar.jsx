// components/Navbar.jsx

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className={`${styles.navbar}`}>
      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Navigation Links */}
      <div className={`${styles.navLinks} ${isOpen ? styles.navOpen : ""}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/artist" onClick={closeMenu}>
          Artist
        </Link>
        <Link href="/booking" onClick={closeMenu}>
          Booking
        </Link>
        <Link href="/location" onClick={closeMenu}>
          Location
        </Link>
        <Link href="/prep" onClick={closeMenu}>
          Prep/Heal
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

