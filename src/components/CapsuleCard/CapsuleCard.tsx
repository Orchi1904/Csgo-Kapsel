"use client"

import { useRouter } from "next/navigation";
import styles from "./CapsuleCard.module.css";
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip, Zoom } from "@mui/material";
import { useState } from "react";

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
    const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

    const handleInfoIconClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();
        setTooltipOpen(true);
    }

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
                        <p className={styles.svpRatioKey}>
                            <Tooltip title={<span className={styles.tooltipText}>
                                <b>Sticker-Value-To-Price Ratio: </b> This metric calculates the ratio between the
                                Sticker Value and the Capsule Price, serving as an indicator of how cheap or expensive
                                a capsule is, the higher the cheaper/better
                            </span>}
                                placement="right"
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
                                TransitionComponent={Zoom}
                                arrow
                                onClose={() => setTooltipOpen(false)}
                                open={tooltipOpen}
                            >
                                <InfoIcon onClick={(e) => handleInfoIconClick(e)}
                                    onMouseEnter={() => setTooltipOpen(true)} />
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