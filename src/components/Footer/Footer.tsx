import React from 'react';
import styles from "./Footer.module.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FrontendMentorIcon from '../FrontendMentorIcon/FrontendMentorIcon';
import Link from 'next/link';

type Props = {
    accentColor: string,
}

function Footer({ accentColor }: Props) {
    const hoverStyle = {
        "--hoverColor": accentColor,
        transition: "color 0.3s, fill 0.3s",
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <h3 className={styles.footerSlogan}>
                    Made with
                    <span className={styles.heartIconContainer}>
                        <FavoriteBorderIcon className={styles.heartIcon} style={{ color: accentColor }} />
                    </span>
                    by Alexej
                </h3>
                <div className={styles.contactContainer}>
                    <h4 className={styles.contactHeadline}>Contact me</h4>
                    <div className={styles.contactIconContainer}>
                        <Link href={"https://www.linkedin.com/in/alexej-kunz/"} aria-label="My LinkedIn Profile">
                            <LinkedInIcon className={`${styles.contactIcon} ${styles.linkedInIcon}`}
                                style={hoverStyle} />
                        </Link>
                        <Link href={"https://github.com/Orchi1904"} aria-label="My GitHub Profile">
                            <GitHubIcon className={styles.contactIcon}
                                style={hoverStyle} />
                        </Link>
                        <Link href={"https://www.frontendmentor.io/profile/Orchi1904"} aria-label="My Frontend Mentor Profile">
                            <div className={styles.contactIcon}>
                                <FrontendMentorIcon style={hoverStyle} fill="white" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer