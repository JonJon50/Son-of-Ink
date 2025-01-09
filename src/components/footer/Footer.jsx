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
                        <p>
                            <a href="/location" className={styles.link}>
                                2181 Crain Hwy, Waldorf, MD 20601
                            </a>
                        </p>
                        <p>(202)440-0855</p>
                        <p>Mon – Fri, 3pm – 8pm</p>
                    </div>

                    {/* Center Content */}
                    <div className={styles.centerContent}>
                        <p>
                            © 2023{' '}
                            <a
                                href="https://www.instagram.com/theronissac/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Theron Issac
                            </a>{' '}
                            All Rights Reserved.
                        </p>
                        <p>
                            Follow us on{' '}
                            <a
                                href="https://www.instagram.com/theronissac/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                ~ Instagram ~
                            </a>
                        </p>
                    </div>


                    {/* Right Content */}
                    <div className={styles.rightContent}>
                        <p>
                            Powered by{' '}
                            <a href="https://www.linkedin.com/in/john-hagens-55b15212a/" target="_blank" className={styles.link}>
                                John Hagens
                            </a>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;
