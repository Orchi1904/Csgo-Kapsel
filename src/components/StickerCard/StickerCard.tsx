import styles from "./StickerCard.module.css";

type Props = {
  title: string,
  icon: string,
  stickerPrice: number,
}

function StickerCard({title, icon, stickerPrice}: Props) {
  return (
    <div className={styles.stickerCard}>
        {/*
        {title}
        {icon}
        {stickerPrice}
        */}
    </div>
  )
}

export default StickerCard