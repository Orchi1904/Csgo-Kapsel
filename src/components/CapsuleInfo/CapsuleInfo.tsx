import styles from "./CapsuleInfo.module.css";

type Props = {
    title: string,
    stickerValue: number | "N/A",
    capsulePrice: number | "N/A",
}

function CapsuleInfo({ title, stickerValue, capsulePrice }: Props) {
    return (
        <div className={styles.capsuleInfo}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.capsulePriceInfoContainer}>
                <div className={styles.capsulePriceInfo}>
                    <p>Sticker Value:</p>
                    <p>{stickerValue.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}</p>
                </div>
                <div className={styles.capsulePriceInfo}>
                    <p>Capsule Price:</p>
                    <p>{capsulePrice.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}</p>
                </div>
            </div>
        </div>
    )
}

export default CapsuleInfo