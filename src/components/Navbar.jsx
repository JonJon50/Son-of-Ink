// components/Navbar.jsx

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dancing_Script } from "next/font/google"; // Import the font
import styles from "./Navbar.module.css";

const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isCurrentRoute = (href) => {
    if (href === "/") return router.pathname === "/";
    if (href === "/artist") {
      return router.pathname === "/artist" || router.pathname === "/[artistName]";
    }
    return router.pathname === href;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${
        router.pathname === "/" ? styles.homepageNavbar : ""
      }`}
      aria-label="Primary navigation"
    >
      <button
        type="button"
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="primary-navigation-links"
        aria-label="Toggle navigation menu"
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <div
        id="primary-navigation-links"
        className={`${styles.navLinks} ${isOpen ? styles.navOpen : ""}`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          aria-current={isCurrentRoute("/") ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          href="/artist"
          onClick={closeMenu}
          aria-current={isCurrentRoute("/artist") ? "page" : undefined}
        >
          Artist
        </Link>
        {/* <Link href="/inspo" onClick={closeMenu}>
          Tattoo Inspo
        </Link> */}
        <Link
          href="/booking"
          onClick={closeMenu}
          aria-current={isCurrentRoute("/booking") ? "page" : undefined}
        >
          Booking
        </Link>
        <Link
          href="/location"
          onClick={closeMenu}
          aria-current={isCurrentRoute("/location") ? "page" : undefined}
        >
          Location
        </Link>
        <Link
          href="/prep"
          onClick={closeMenu}
          aria-current={isCurrentRoute("/prep") ? "page" : undefined}
        >
          Prep/Heal
        </Link>
      </div>

      {/* Sons of Ink in Cursive */}
      <div className={`${styles.brand} ${dancingScript.className}`}>
        Son of <span className={styles.redLetter}>I</span>nk
      </div>
    </nav>
  );
};

export default Navbar;
