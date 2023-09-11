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
    return (
        <footer className={styles.footer}>
            <h3 className={styles.footerSlogan}>
                Made with
                <span className={styles.heartIconContainer}>
                    <FavoriteBorderIcon className={styles.heartIcon} style={{ color: accentColor }} />
                </span>
                by Orchi1904
            </h3>
            <div className={styles.contactContainer}>
                <h4 className={styles.contactHeadline}>Contact me</h4>
                <div className={styles.contactIconContainer}>
                    <Link href={"https://www.linkedin.com/in/alexej-kunz/"}>
                        <LinkedInIcon className={`${styles.contactIcon} ${styles.linkedInIcon}`} />
                    </Link>
                    <Link href={"https://github.com/Orchi1904"}>
                        <GitHubIcon className={styles.contactIcon} />
                    </Link>
                    <Link href={"https://www.frontendmentor.io/profile/Orchi1904"}>
                        <div className={styles.contactIcon}>
                            <FrontendMentorIcon fill="white" />
                        </div>
                    </Link>
                </div>
            </div>
        </footer >
    )
}

export default Footer