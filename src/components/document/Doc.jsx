// Doc.jsx component
import React from 'react';
import styles from './Doc.module.css';
import Link from "next/link";

const Doc = () => {
  return (
    <div className={styles.container}>
      {/* Content of the Doc component */}
      <h1>Tattoo Preparation Guide</h1>
      {/* ...more content */}
    </div>
  );
};

export default Doc;