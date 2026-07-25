import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  const fadeInUp = {
    initial: { y: 90, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className={styles.home}>
      {/* Video Section */}
      <div className={styles.videoContainer}>
        <video
          src="/static/videos/Tattoo-Videos.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
        <div className={styles.videoOverlay}>
          <div className={styles.heroContent}>
            <motion.h1
              className={`${styles["text-overlay"]} ${styles.customFont}`}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              Son of <span className={styles.accentLetter}>I</span>nk
            </motion.h1>
            <p className={styles.heroStatement}>
              Imagine Your Vision <span>And Bring It to Life</span>
            </p>
            <p className={styles.heroCopy}>
              Bringing your vision to life with personalized tattoos and
              exceptional client experiences.
            </p>
            <div className={styles.heroActions}>
              <Link href="/booking">
                <motion.button
                  className={styles.roundButton}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1.2, delay: 0.5 }}
                >
                  Book a Consultation
                </motion.button>
              </Link>
              <Link href="/artist" className={styles.secondaryAction}>
                Artist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Overlay Section */}
      <div className={styles.videoOverlaySection}>
        <video
          autoPlay
          loop
          muted
          preload="auto"
          poster="/Assets/HandsTattooing.jpeg"
          className={styles.overlayVideo}
        />
        <div className={styles.overlayContent}>
          <motion.h2
            className={styles.mainTitle}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Imagine Your Vision <br /> And Bring It to Life
          </motion.h2>
          <div className={styles.sideBySideParagraphs}>
            <div className={styles.paragraphSection}>
              <h2 className={styles.subtitle}>Who We Are</h2>
              <p>
                At Son of Ink, we are passionate about providing an exceptional
                tattoo experience. From personalized designs to aftercare
                guidance, we ensure every client feels valued and leaves with a
                piece of art they’re proud to wear.
              </p>
            </div>
            <div className={styles.paragraphSection}>
              <h2 className={styles.subtitle}>What We Do</h2>
              <p>
                Our team stands out by delivering client-driven artistry.
                Whether it’s your first tattoo or your tenth, we make the
                process comfortable and collaborative, ensuring a unique and
                memorable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
