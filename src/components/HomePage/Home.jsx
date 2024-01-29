import React from "react";
import videoBg from "public/static/videos/Tattoo Video.mp4";
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

const StatItem = ({ end, suffix, title, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only run once when the component comes into view for the first time
    threshold: 0.3, // The component starts the animation when 30% of it is visible within the viewport
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
    initial: { y: 90, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  
  return (
    <div className={styles.home}>
      <div className={styles.videoContainer}>
        <video src={videoBg} autoPlay loop muted  playsInline className={styles.video} />
      </div>
      {/* <div className={styles.mobileBackground}></div> */}
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
      {/* New video section with overlay */}
      <div className={styles.videoOverlaySection}>
        <video
          // src="https://www.sentinelone.com/wp-content/uploads/2019/11/S1_Website_Section4_Background_Waves-1.mp4%22%20type=%22video/mp4%22%20src=%22https://www.sentinelone.com/wp-content/uploads/2019/11/S1_Website_Section4_Background_Waves-1.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          poster="./Assets/HandsTattooing.jpeg" // Add a poster image
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
            Imagine your vision, <br /> and bring it to <br /> life.
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
                location for me, at Grey Havens Tattoo. I’m at a shop that lets
                me express who I am and who I want to be artistically. Here I’m
                able to really focus on tailoring my experience to each
                individual client and giving them the best custom tattoo they
                could ask for.
              </p>
            </div>
            <div className={styles.paragraphSection}>
              <h2 className={styles.subtitle}>What we do</h2>
              <p>
                I pride myself on standing out by being a client driven artist
                who listens and wants the customer to have a one of a kind
                experience they will always remember. Based on past personal
                experiences at other shops I realize the process of getting a
                tattoo can be a very intimidating experience for anyone, so I
                want them to be comfortable and understand that I’m on the same
                page, patient and listening. Different from many other artists,
                I set aside a lot of time to prepare for each client and hold
                myself to an extremely high standard. I envision every detail of
                the tattoo they want and create a custom piece that exceeds
                their expectations. I enjoy implementing aspects of texture into
                each unique tattoo I create to give it added depth.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
