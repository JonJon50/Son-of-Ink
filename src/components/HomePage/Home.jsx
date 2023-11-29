import React from "react";
import videoBg from "public/static/videos/Tattoo Video.mp4";
import styles from "./Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className={styles.home}>
      <div className={styles.videoContainer}>
        <video src={videoBg} autoPlay loop muted className={styles.video} />
      </div>

      <motion.h5
        className={`${styles["text-overlay"]} ${styles["customFont"]}`}
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        Son of Ink
      </motion.h5>

      <div className={styles["button-container"]}>
        <Link href="/booking">
          <motion.button
            className={`${styles["round-button"]} ${styles["text-overlay"]}`}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            CONSULTATIONS
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
