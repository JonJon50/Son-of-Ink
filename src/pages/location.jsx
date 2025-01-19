import React, { useState } from "react";
import Map from "../components/map/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPhone,
  faClock,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./location.module.css";
import { motion } from "framer-motion";

const Location = () => {
  const [isContactVisible, setContactVisible] = useState(false);

  const toggleContactInfo = () => {
    setContactVisible(!isContactVisible);
  };

  const slideIn = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className={styles["whole-container"]}>
      <div className={styles["location-header"]}>
        <motion.h4
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 1.0, delay: 1.0 }}
        >
          Contact Information
        </motion.h4>
      </div>
      <div className={styles["content-container"]}>
        <div
          className={`${styles["contact-container"]} ${isContactVisible ? styles.visible : ""
            }`}
        >
          {/* Address Section */}
          <div className={styles["contact-info"]}>
            <FontAwesomeIcon icon={faAddressCard} />
            <motion.h5
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              ADDRESS
            </motion.h5>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              2181 Crain Hwy, Waldorf, MD 20601
            </motion.p>
          </div>
          {/* Phone Section */}
          <div className={styles["contact-info"]}>
            <FontAwesomeIcon icon={faPhone} />
            <motion.h5
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              PHONE
            </motion.h5>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              407-990-1921
            </motion.p>
          </div>
          {/* Opening Hours Section */}
          <div className={styles["contact-info"]}>
            <FontAwesomeIcon icon={faClock} />
            <motion.h5
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              OPENING HOURS
            </motion.h5>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Mon – Fri, 10am – 8pm
              <br />
              Closed on Weekends, Thanksgiving, Christmas, New Years, Memorial
              Day, 4th of July, Labor Day
            </motion.p>
          </div>
          <div className={styles["toggle-arrow"]} onClick={toggleContactInfo}>
            <FontAwesomeIcon
              icon={isContactVisible ? faChevronLeft : faChevronRight}
            />
          </div>
        </div>
        <div className={styles["map-container"]}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Location;
