// components/Navbar.jsx

import React, { useState } from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google"; // Import the font
import styles from "./Navbar.module.css";

const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
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

      {/* Sons of Ink in Cursive */}
      <div className={`${styles.brand} ${dancingScript.className}`}>
        Sons of <span className={styles.redLetter}>I</span>nk
      </div>
    </nav>
  );
};

export default Navbar;
