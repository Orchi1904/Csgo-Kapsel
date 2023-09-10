"use client"

import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './PageWrapper.module.css';
import Image from 'next/image';

type Props = {
    children: ReactNode;
    endLineBgImg: string,
}

function PageWrapper({ children, endLineBgImg }: Props) {

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.logoContainer}>
                <Link className={styles.link} onClick={() => { window.scrollTo(0, 0) }} href="/">
                    <Image
                        className={styles.logo}
                        src="/images/logoGroß.svg"
                        alt="CSGO Kapsel Logo"
                        fill
                    >
                    </Image>
                </Link>
            </div>
            <div className={styles.childrenContainer}>
                {children}
            </div>
            <div className={styles.endLine} style={{ backgroundImage: `url(${endLineBgImg})`, backgroundSize: "cover" }} />
        </div>
    )
}

export default PageWrapper;