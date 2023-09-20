import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './PageWrapper.module.css';
import Image from 'next/image';
import Footer from '../Footer/Footer';
import Dropdown from '../Dropdown/Dropdown';

type Props = {
    children: ReactNode,
    accentColor: string,
    endLineBgImg: string,
}

function PageWrapper({ children, accentColor, endLineBgImg }: Props) {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.logoBackground}>
                <div className={styles.logoContainer}>
                    <Link className={styles.link} href="/">
                        <Image
                            className={styles.logo}
                            src="/images/logoGroß.svg"
                            alt="CSGO Kapsel Logo"
                            width={185}
                            height={65}
                        >
                        </Image>
                    </Link>
                    <Dropdown dropdownValues={["€ EUR", "£ GBP", "$ USD", "₿ BTC"]} name="currencyDropdown" 
                              defaultValue="€ EUR" type="currency" />
                </div>
            </div>
            <div className={styles.childrenContainer}>
                {children}
            </div>
            <div className={styles.footerContainer}>
                <Footer accentColor={accentColor} />
                <div className={styles.endLine} style={{ backgroundImage: `url(${endLineBgImg})`, backgroundSize: "cover" }} />
            </div>
        </div>
    )
}

export default PageWrapper;