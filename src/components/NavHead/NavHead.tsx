import Link from 'next/link';
import styles from './NavHead.module.css';
import Image from 'next/image';

function NavHead() {
    return (
        <div className={styles.logoContainer}>
            <Link href="/">
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