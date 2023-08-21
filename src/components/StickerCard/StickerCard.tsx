import Link from "next/link";
import styles from "./StickerCard.module.css";

type Props = {
  title: string,
  icon: string,
  steamLink: string,
  stickerPrice: number,
}

function StickerCard({ title, icon, steamLink, stickerPrice }: Props) {
  return (
    <Link className={styles.stickerCardContainerBorder} href={steamLink}>
      <div className={styles.stickerCardContainer}>
        <div className={styles.stickerCard}>
          <div className={styles.stickerIconContainer}>
            <img className={styles.stickerIcon} src={icon} alt={title + " image"} />
          </div>
        </div>
        <div className={styles.stickerDetails}>
          <h3 className={styles.stickerTitle}>{title}</h3>
          <p className={styles.stickerPrice}>
            {stickerPrice.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default StickerCard