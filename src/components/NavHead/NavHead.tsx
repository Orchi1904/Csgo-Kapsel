"use client"

import Link from 'next/link';
import styles from './NavHead.module.css';
import Image from 'next/image';

function NavHead() {

    return (
        <div className={styles.logoContainer}>
            <Link className={styles.link} onClick={() => {window.scrollTo(0, 0)}} href="/">
                <Image
                    className={styles.logo}
                    src="/images/logoGroß.svg"
                    alt="CSGO Kapsel Logo"
                    fill
                >
                </Image>
            </Link>
        </div>
    )
}

export default NavHead