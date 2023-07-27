import Image from "next/image";
import styles from "./HeroSection.module.css";

function HeroSection() {
    return (
        <div className={styles.heroContainer}>
            <Image
                className={styles.heroImage}
                src="/images/hero.svg"
                alt="Get Price Information For All CS Major Sticker Capsules"
                fill
            />
            <h1 className={styles.heroText}>Get Price Information For All CS Major Sticker Capsules</h1>
        </div>
    )
}

export default HeroSection