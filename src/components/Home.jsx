import React from 'react';
import videoBg from 'public/static/videos/Tattoo Video.mp4';
import styles from './Home.module.css'; // Import the CSS module

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.videoContainer}>
        <video src={videoBg} autoPlay loop muted className={styles.video} />
      </div>
      <h1 className={`${styles['text-overlay']} text-white text-4xl font-bold`}>
        Welcome to Sons of Ink
      </h1>
    </div>
  );
};

export default Home;








