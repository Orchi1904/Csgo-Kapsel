"use client"

import { useRouter } from "next/navigation";
import styles from "./CapsuleCard.module.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type Props = {
    title: string,
    icon: string,
    stickerValue: number | "N/A",
    capsulePrice: number | "N/A",
    svpRatio: number | "N/A",
    detailPage: string,
}

function CapsuleCard({ title, icon, stickerValue, capsulePrice, svpRatio, detailPage }: Props) {
    const router = useRouter();

    return (
        <div className={styles.card} onClick={() => { router.push(detailPage) }}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.iconAndInformationContainer}>
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={icon} alt={title + " image"} />
                </div>
                <div className={styles.informationContainer}>
                    <div className={styles.information}>
                        <p>Sticker Value: </p>
                        <p>{stickerValue.toLocaleString("de-DE", { style: "currency", currency: "USD" }).replace(",", ".")}</p>
                    </div>
                    <div className={styles.information}>
                        <p>Capsule Price: </p>
                        <p>
                            {capsulePrice !== "N/A" ?
                                Number(capsulePrice).toLocaleString("de-DE", { style: "currency", currency: "USD" }).replace(",", ".")
                                : "N/A"
                            }
                        </p>
                    </div>
                    <div className={styles.information}>
                        <p>SV/P Ratio:</p>
                        <p>
                            {svpRatio !== "N/A" ?
                                svpRatio.toFixed(2) + " x"
                                : "N/A"
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CapsuleCard;