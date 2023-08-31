// Home.jsx

// Import necessary modules and assets
import React from 'react';
import videoBg from 'public/static/videos/Tattoo Video.mp4'; // Import the background video
import styles from './Home.module.css'; // Import the CSS module for styling

// Define the Home functional component
const Home = () => {
  return (
    // Main container for the home section
    <div className={styles.home}>
      {/* Container for the background video */}
      <div className={styles.videoContainer}>
        {/* Background video element */}
        <video src={videoBg} autoPlay loop muted className={styles.video} />
      </div>
      
      {/* Text overlay */}
      <h5 className={styles['text-overlay']}>Son's of Ink</h5>
      
      {/* Button container */}
      <div className={styles['button-container']}>
        {/* Round button with text overlay */}
        <button className={`${styles['round-button']} ${styles['text-overlay']}`}>
          CONSULTATIONS
        </button>
      </div>
    </div>
  );
};

// Export the Home component for use in other parts of the application
export default Home;













