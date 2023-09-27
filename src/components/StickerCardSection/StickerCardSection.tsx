import { Sticker } from "@/types";
import StickerCard from "../StickerCard/StickerCard";
import styles from "./StickerCardSection.module.css";
import { stickerSortFunctions } from "@/helper/sortFunctions";

type Props = {
  stickerArr: Sticker[],
  sorting: keyof typeof stickerSortFunctions,
}

function StickerCardSection({ stickerArr, sorting }: Props) {
  const sortedStickerArr = [...stickerArr].sort(
    stickerSortFunctions[sorting] || stickerSortFunctions["default"]
  )

  return (
    <div className={styles.stickerCardSection}>
      {sortedStickerArr.map((sticker) => (
        <StickerCard key={sticker.name} sticker={sticker} />
      ))}
    </div>
  )
}

export default StickerCardSection