// Home.jsx

import React from 'react';
import videoBg from 'public/static/videos/Tattoo Video.mp4';
import styles from './Home.module.css'; // Import the CSS module

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.videoContainer}>
        <video src={videoBg} autoPlay loop muted className={styles.video} />
      </div>
      <h5 className={styles['text-overlay']}>Son's of Ink</h5>
      {/* <h1 className={`${styles['text-overlay']} ${styles['brought-by']}`}>Brought to you by</h1> */}
      <div className={styles['button-container']}>
        <button className={`${styles['round-button']} ${styles['text-overlay']}`}>
          CONSULTATIONS
        </button>
      </div>
    </div>
  );
};

export default Home;












