"use client"

import React, { useState } from 'react';
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
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [hoveredIcon, setHoveredIcon] = useState<string>("");

    const hoverStyle = {
        color: isHovered ? accentColor : "",
    }

    const handleMouseEnter = (iconName: "LinkedIn" | "GitHub" | "Frontend Mentor") => {
        setIsHovered(true);
        setHoveredIcon(iconName);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredIcon("");
    }

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
                        <LinkedInIcon className={`${styles.contactIcon} ${styles.linkedInIcon}`}
                            style={hoveredIcon === "LinkedIn" ? hoverStyle : {}}
                            onMouseEnter={() => handleMouseEnter("LinkedIn")}
                            onMouseLeave={() => handleMouseLeave()} />
                    </Link>
                    <Link href={"https://github.com/Orchi1904"}>
                        <GitHubIcon className={styles.contactIcon}
                            style={hoveredIcon === "GitHub" ? hoverStyle : {}}
                            onMouseEnter={() => handleMouseEnter("GitHub")}
                            onMouseLeave={() => handleMouseLeave()} />
                    </Link>
                    <Link href={"https://www.frontendmentor.io/profile/Orchi1904"}>
                        <div className={styles.contactIcon}
                            onMouseEnter={() => handleMouseEnter("Frontend Mentor")}
                            onMouseLeave={() => handleMouseLeave()}>
                            <FrontendMentorIcon fill={isHovered && hoveredIcon === "Frontend Mentor" 
                                                    ? accentColor : "white"}/>
                        </div>
                    </Link>
                </div>
            </div>
        </footer >
    )
}

export default Footer