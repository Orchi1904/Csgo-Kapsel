"use client"

import { useRouter } from "next/navigation";
import styles from "./Card.module.css";

type Props = {
    title?: string,
    icon: string,
    stickerValue?: number,
    capsulePrice?: number,
    detailPage?: string,
}

function Card({ title, icon, stickerValue, capsulePrice, detailPage }: Props) {
    const router = useRouter();

    return (
        <div className={styles.card} onClick={() => { detailPage ? router.push(detailPage) : null }}>
            {title ? (
                <h3 className={styles.title}>{title}</h3>
            ) : ""}

            <div className={styles.iconContainer}>
                <img className={styles.icon} src={icon} />
            </div>

            {stickerValue || capsulePrice ? (
                <div className={styles.informationContainer}>
                    {stickerValue ? (
                        <div className={styles.information}>
                            <p>Sticker Value: </p>
                            <p>{stickerValue.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}</p>
                        </div>
                    ) : ""}
                    {capsulePrice ? (
                        <div className={styles.information}>
                            <p>Capsule Price: </p>
                            <p>{capsulePrice.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}</p>
                        </div>
                    ) : ""}
                </div>
            ) : ""}
        </div>
    )
}

export default Card