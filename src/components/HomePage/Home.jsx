import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglass,
  faHandshake,
  faUsers,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

// Component to display the stats
const StatItem = ({ end, suffix, title, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Animation triggers when 30% of the element is in view
  });

  return (
    <div className={styles.statItem} ref={ref}>
      <div className={styles.statIcon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.statNumber}>
        <CountUp end={inView ? end : 0} duration={1} suffix={suffix} />
      </div>
      <div className={styles.statText}>{title}</div>
    </div>
  );
};

// Main Home component
const Home = () => {
  const fadeInUp = {
    initial: { y: 90, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className={styles.home}>
      <div className={styles.videoContainer}>
        <video
          src="/static/videos/Tattoo-Videos.mp4"  // Direct file path from public directory
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
      </div>

      <motion.h5
        className={`${styles["text-overlay"]} ${styles["customFont"]}`}
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.9, delay: 0.2 }}
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
            transition={{ duration: 1.9, delay: 0.4 }}
          >
            CONSULTATIONS
          </motion.button>
        </Link>
      </div>

      {/* Statistics section */}
      <div className={styles.statisticsSection}>
        <StatItem
          end={10}
          suffix="+"
          title="Years in the Industry"
          icon={faHourglass}
        />
        <StatItem end={3192} title="Client Relationships" icon={faHandshake} />
        <StatItem end={204070} title="Tattoos Done" icon={faUsers} />
        <StatItem end={6173} title="Members" icon={faChalkboardTeacher} />
      </div>

      {/* Video section with overlay */}
      <div className={styles.videoOverlaySection}>
        <video
          autoPlay
          loop
          muted
          preload="auto"
          poster="/Assets/HandsTattooing.jpeg" // Poster image before the video loads
          className={styles.overlayVideo}
        />
        <div className={styles.overlayContent}>
          <motion.h1
            className={styles.mainTitle}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.0, delay: 0.5 }}
          >
            Imagine your vision, and <br /> bring it to life.
          </motion.h1>
          <div className={styles.sideBySideParagraphs}>
            <div className={styles.paragraphSection}>
              <h2 className={styles.subtitle}>Who we are</h2>
              <p>
                I am passionate about what I do and offer clients, and want to
                give them the ultimate tattoo experience. Whether it's the
                ability to book their appointments online, offering and
                including specific aftercare, or just within the tattoo design
                itself. I want your tattoo experience with me to stand out from
                the rest. My goal is to create an instant positive reaction each
                and every time I show a client the initial drawing of their new
                tattoo. With over a decade of experience, I have found the right
                location for me, at Grey Havens Tattoo.
              </p>
            </div>
            <div className={styles.paragraphSection}>
              <h2 className={styles.subtitle}>What we do</h2>
              <p>
                I pride myself on standing out by being a client-driven artist
                who listens and wants the customer to have a one-of-a-kind
                experience they will always remember. Based on past personal
                experiences at other shops, I realize the process of getting a
                tattoo can be intimidating for anyone, so I want them to be
                comfortable and understand that I’m on the same page, patient,
                and listening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
