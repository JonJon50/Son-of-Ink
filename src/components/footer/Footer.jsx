import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <footer className={styles.siteFooter}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <a href="https://github.com/JonJon50" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcons}>
                        <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */} {/* Use FontAwesomeIcon */}
                        </a>
                        <p className={styles.footerContent}>© 2023 John Hagens. All Rights Reserved.</p>
                        <a href="https://www.linkedin.com/in/john-hagens-55b15212a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcons1}>
                        <FontAwesomeIcon icon={faLinkedinIn} /> {/* Use FontAwesomeIcon */}
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
