import styles from "./CapsuleInfo.module.css";

type Props = {
    title: string,
    stickerValue: number | "N/A",
    capsulePrice: number | "N/A",
    svpRatio: number | "N/A"
}

function CapsuleInfo({ title, stickerValue, capsulePrice, svpRatio }: Props) {
    return (
        <div className={styles.capsuleInfo}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.capsulePriceInfoContainer}>
                <div className={styles.capsulePriceInfo}>
                    <p>Sticker Value:</p>
                    <p>{stickerValue.toLocaleString("de-DE", { style: "currency", currency: "USD" }).replace(",", ".")}</p>
                </div>
                <div className={styles.capsulePriceInfo}>
                    <p>Capsule Price:</p>
                    <p>{capsulePrice.toLocaleString("de-DE", { style: "currency", currency: "USD" }).replace(",", ".")}</p>
                </div>
                <div className={styles.capsulePriceInfo}>
                    <p>SV/P Ratio:</p>
                    <p>{svpRatio !== "N/A" ?
                        svpRatio.toFixed(2) + " x"
                        : "N/A"
                    }</p>
                </div>
            </div>
        </div>
    )
}

export default CapsuleInfo