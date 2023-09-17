import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './PageWrapper.module.css';
import Image from 'next/image';
import Footer from '../Footer/Footer';

type Props = {
    children: ReactNode,
    accentColor: string,
    endLineBgImg: string,
}

function PageWrapper({ children, accentColor, endLineBgImg }: Props) {

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.logoContainer}>
                <Link className={styles.link} href="/">
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
            <div className={styles.footerContainer}>
                <Footer accentColor={accentColor}/>
                <div className={styles.endLine} style={{ backgroundImage: `url(${endLineBgImg})`, backgroundSize: "cover" }} />
            </div>
        </div>
    )
}

export default PageWrapper;