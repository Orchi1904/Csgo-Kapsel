import styles from "./Card.module.css";

type Props = {
    title: string,
    icon: string,
    stickerValue: number,
    capsulePrice: number,
}

function Card({ title, icon, stickerValue, capsulePrice }: Props) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src={icon} />
            </div>
            <div className={styles.informationContainer}>
                <div className={styles.information}>
                    <p>Sticker Value: </p>
                    <p>{stickerValue.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}</p>
                </div>
                <div className={styles.information}>
                    <p>Capsule Price: </p>
                    <p>{capsulePrice.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}</p>
                </div>
            </div>
        </div>
    )
}

export default Card