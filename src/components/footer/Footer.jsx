import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.siteFooter}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <a href="https://github.com/JonJon50" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcons}>
                            <i className="fab fa-github"></i>
                        </a>
                        <p className={styles.footerContent}>© 2023 John Hagens. All Rights Reserved.</p>
                        <a href="https://www.linkedin.com/in/john-hagens-55b15212a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcons}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer