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

// Component to display statistics
const StatItem = ({ end, suffix, title, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className={styles.statItem} ref={ref}>
      <div className={styles.statIcon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.statNumber}>
        <CountUp end={inView ? end : 0} duration={1.5} suffix={suffix} />
      </div>
      <div className={styles.statText}>{title}</div>
    </div>
  );
};

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
          <motion.h1
            className={`${styles["text-overlay"]} ${styles["customFont"]}`}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Son of Ink
          </motion.h1>
        </div>
      </div>

      {/* Call to Action */}
      <div className={styles.buttonContainer}>
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
      </div>

      {/* Statistics Section */}
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
          <motion.h1
            className={styles.mainTitle}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Imagine Your Vision <br /> And Bring It to Life
          </motion.h1>
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
