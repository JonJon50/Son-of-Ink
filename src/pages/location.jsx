import React, { useState } from "react";
import Map from "../components/map/Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './location.module.css';


const Location = () => {
  const [isContactVisible, setContactVisible] = useState(false);

  const toggleContactInfo = () => {
    setContactVisible(!isContactVisible);
  };

  return (
    <div className={styles['whole-container']}>
      <div className={styles['location-header']}>
        <span>Location</span>
      </div>
      <div className={styles['content-container']}>
        <div className={styles['contact-container']}>
        <div className={styles['contact-info']}>
  <FontAwesomeIcon icon={faAddressCard} />
  <h5>ADDRESS</h5>  
  <p>2170 West State Road 434<br />Suite 190<br />Longwood, FL 32779</p>
</div>
<div className={styles['contact-info']}>
  <FontAwesomeIcon icon={faPhone} />
  <h5>PHONE</h5>
  <p>407-990-1921</p>
</div>
<div className={styles['contact-info']}>
  <FontAwesomeIcon icon={faClock} />
  <h5>OPENING HOURS</h5>  
  <p>Mon – Fri, 8:00am – 4:30pm<br />
     Closed on Weekends, Thanksgiving, Christmas, New Years, Memorial Day, 4th of July, Labor Day</p>
</div>
        </div>
        <div className={styles['map-container']}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Location;

