"use client"

import { useRouter } from "next/navigation";
import styles from "./CapsuleCard.module.css";

type Props = {
    title?: string,
    icon: string,
    stickerValue?: number | "N/A",
    capsulePrice?: number | "N/A",
    detailPage?: string,
    hoverAnimation?: boolean,
    infoCard?: boolean,
}

function CapsuleCard({ title, icon, stickerValue, capsulePrice, hoverAnimation, infoCard, detailPage }: Props) {
    const router = useRouter();

    return (
        <>
            {infoCard
                ?
                <div className={styles.card} onClick={() => { detailPage ? router.push(detailPage) : null }}
                    data-hover-animation={hoverAnimation}>
                    {title ? (
                        <h3 className={styles.title}>{title}</h3>
                    ) : ""}

                    <div className={styles.iconAndInformationContainer}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={icon} alt={title + " image"} />
                        </div>

                        {stickerValue || capsulePrice ? (
                            <div className={styles.informationContainer}>
                                {stickerValue ? (
                                    <div className={styles.information}>
                                        <p>Sticker Value: </p>
                                        <p>{stickerValue.toLocaleString("de-DE", { style: "currency", currency: "USD" }).replace(",", ".")}</p>
                                    </div>
                                ) : ""}
                                {capsulePrice ? (
                                    <div className={styles.information}>
                                        <p>Capsule Price: </p>
                                        <p>
                                            {capsulePrice !== "N/A" ?
                                                Number(capsulePrice).toLocaleString("de-DE", { style: "currency", currency: "USD" }).replace(",", ".")
                                                : "N/A"
                                            }
                                        </p>
                                    </div>
                                ) : ""}
                            </div>
                        ) : ""}
                    </div>
                </div>
                :
                <div className={styles.noInfoCard}>
                    <img className={styles.noInfoCardIcon} src={icon} alt={title + " image"} />
                </div>
            }
        </>
    )
}

export default CapsuleCard;