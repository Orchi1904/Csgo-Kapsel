"use client"

import { Tooltip, Zoom } from "@mui/material";
import styles from "./CapsuleInfo.module.css";
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";

type Props = {
    title: string,
    stickerValue: number | "N/A",
    capsulePrice: number | "N/A",
    svpRatio: number | "N/A"
}

function CapsuleInfo({ title, stickerValue, capsulePrice, svpRatio }: Props) {
    const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);


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
                            TransitionComponent={Zoom}
                            arrow
                            enterTouchDelay={0}
                            leaveTouchDelay={10000}
                            onClose={() => setTooltipOpen(false)}
                            open={tooltipOpen}
                        >
                            <InfoIcon onClick={() => setTooltipOpen(true)}
                                onMouseEnter={() => setTooltipOpen(true)} />
                        </Tooltip>
                        SV/P Ratio:
                    </p>
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