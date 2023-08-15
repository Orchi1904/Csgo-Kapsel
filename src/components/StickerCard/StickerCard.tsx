import Link from "next/link";
import styles from "./StickerCard.module.css";

type Props = {
  title: string,
  icon: string,
  steamLink: string,
  stickerPrice: number,
  borders?: boolean,
  borders2?: boolean,
}

function StickerCard({ title, icon, steamLink, stickerPrice, borders, borders2 }: Props) {
  return (
    <Link className={`${styles.stickerCardContainer} 
          ${borders? styles.stickerCardContainerBorders : borders2? styles.stickerCardContainerBorders2 : ""}`} 
          href={steamLink}>
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
    </Link>
  )
}

export default StickerCard