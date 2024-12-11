import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className={styles.siteFooter}>
                <div className={styles.container}>
                    {/* Left Content */}
                    <div className={styles.leftContent}>
                        <p>2181 Crain Hwy, Waldorf, MD 20601</p>
                        <p>407-990-1921</p>
                        <p>Mon – Fri, 3pm – 8pm</p>
                    </div>

                    {/* Center Content */}
                    <div className={styles.centerContent}>
                        <p>
                            © 2023 <a
                                href="https://www.instagram.com/theronissac/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Theron Fenwick
                            </a> All Rights Reserved.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className={styles.rightContent}>
                        <div className={styles.socialIcons}>
                            {/* Social Icons on the Left */}
                            <a
                                href="https://github.com/JonJon50"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className={styles.icon}
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/john-hagens-55b15212a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={styles.icon}
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                        <p>
                            Powered by{' '}
                            <a
                                href="https://www.linkedin.com/in/john-hagens-55b15212a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.poweredByLink}
                            >
                                John Hagens
                            </a>
                        </p>
                        <div className={styles.socialIcons}>
                            {/* Social Icons on the Right */}
                            <a
                                href="https://github.com/JonJon50"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className={styles.icon}
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/john-hagens-55b15212a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={styles.icon}
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
