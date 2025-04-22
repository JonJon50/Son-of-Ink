import React from 'react';
import TattooInspoForm from '../components/HomePage/TattooInspoForm';
import styles from './inspo.module.css'; // ✅ Local CSS module

export default function InspoPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Tattoo Inspiration Finder</h1>
            <TattooInspoForm />
        </div>
    );
}
