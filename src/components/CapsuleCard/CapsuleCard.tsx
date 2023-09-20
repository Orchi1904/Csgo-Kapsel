"use client"

import { useRouter } from "next/navigation";
import styles from "./CapsuleCard.module.css";
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip, Zoom } from "@mui/material";

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
                        <p>{stickerValue.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}</p>
                    </div>
                    <div className={styles.information}>
                        <p>Capsule Price: </p>
                        <p>
                            {capsulePrice !== "N/A" ?
                                Number(capsulePrice).toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")
                                : "N/A"
                            }
                        </p>
                    </div>
                    <div className={styles.information}>
                        <p className={styles.svpRatioKey}>
                            <Tooltip title={<span className={styles.tooltipText}>
                                <b>Sticker-Value-To-Price Ratio: </b> This metric calculates the ratio between the
                                Sticker Value and the Capsule Price, serving as an indicator of how cheap or expensive
                                a capsule is, the higher the cheaper/better
                            </span>}
                                PopperProps={{
                                    popperOptions: {
                                        modifiers: [
                                            {
                                                name: 'preventOverflow',
                                                options: {
                                                    boundariesElement: 'viewport', 
                                                },
                                            },
                                        ],
                                    },
                                }}
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            bgcolor: "#181818",
                                            '& .MuiTooltip-arrow': {
                                                color: "#181818",
                                            },
                                        },
                                    },
                                }}
                                enterTouchDelay={0}
                                leaveTouchDelay={10000}
                                TransitionComponent={Zoom}
                                arrow
                            >
                                <InfoIcon onClick={(e) => e.stopPropagation()}/>
                            </Tooltip>
                            SV/P Ratio:
                        </p>
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