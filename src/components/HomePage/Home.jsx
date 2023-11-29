import React from "react";
import videoBg from "public/static/videos/Tattoo Video.mp4";
import styles from "./Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faHandshake, faUsers, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';


const StatItem = ({ end, suffix, title, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only run once when the component comes into view for the first time
    threshold: 0.3,    // The component starts the animation when 30% of it is visible within the viewport
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

const Home = () => {
  const fadeInUp = {
    initial: { y: 80, opacity: 0 },
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
      {/* Statistics section */}
      <div className={styles.statisticsSection}>
        <StatItem end={10} suffix="+" title="Years in the Industry" icon={faHourglass} />
        <StatItem end={3192} title="Client Relationships" icon={faHandshake} />
        <StatItem end={204070} title="Tattoos Done" icon={faUsers} />
        <StatItem end={6173} title="Members" icon={faChalkboardTeacher} />
      </div>
    </div>
  );
};

export default Home;
