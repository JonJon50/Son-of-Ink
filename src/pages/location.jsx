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

const Location = () => {
  const [isContactVisible, setContactVisible] = useState(false);

  const toggleContactInfo = () => {
    setContactVisible(!isContactVisible);
  };

  return (
    <div className={styles["whole-container"]}>
      <div className={styles["location-header"]}>
        <h4>Contact Infomation</h4>
      </div>
      <div className={styles["content-container"]}>
        <div
          className={`${styles["contact-container"]} ${
            isContactVisible ? styles.visible : ""
          }`}
        >
          <div className={styles["contact-info"]}>
            <FontAwesomeIcon icon={faAddressCard} />
            <h5>ADDRESS</h5>
            <p>
            2181 Crain Hwy,
              <br />
              Waldorf, MD 20601
            </p>
          </div>
          <div className={styles["contact-info"]}>
            <FontAwesomeIcon icon={faPhone} />
            <h5>PHONE</h5>
            <p>407-990-1921</p>
          </div>
          <div className={styles["contact-info"]}>
            <FontAwesomeIcon icon={faClock} />
            <h5>OPENING HOURS</h5>
            <p>
              Mon – Fri, 3pm – 8pm
              <br />
              Closed on Weekends, Thanksgiving, Christmas, New Years, Memorial
              Day, 4th of July, Labor Day
            </p>
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
