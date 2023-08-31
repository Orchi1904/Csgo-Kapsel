import { Sticker } from "@/types";
import StickerCard from "../StickerCard/StickerCard";
import styles from "./StickerCardSection.module.css";

type Props = {
  stickerArr: Sticker[],
}

function StickerCardSection({stickerArr}: Props) {
  return (
    <div className={styles.stickerCardSection}>
      {stickerArr.map((sticker) => (
        <StickerCard key={sticker.name} title={sticker.name} icon={sticker.icon} steamLink={sticker.steam_link}
          stickerPrice={sticker.average_price} />
      ))}
    </div>
  )
}

export default StickerCardSection