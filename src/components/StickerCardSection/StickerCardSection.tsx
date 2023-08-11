import Dropdown from "../Dropdown/Dropdown";
import styles from "./StickerCardSection.module.css";

function StickerCardSection() {
  return (
    <div className={styles.stickerCardSection}>
        <div className={styles.stickerCardSectionHead}>
            <h4 className={styles.stickerCardSectionHeadTitle}>Stickers</h4>
            <Dropdown name="stickerSort" width="100%"/>
        </div>
    </div>
  )
}

export default StickerCardSection