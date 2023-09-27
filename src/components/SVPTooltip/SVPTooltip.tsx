import React from 'react';
import { Tooltip, Zoom } from "@mui/material";
import styles from "./SVPTooltip.module.css";
import InfoIcon from '@mui/icons-material/Info';

type Props = {
    stopPropagation?: boolean,
}

function SVPTooltip({ stopPropagation }: Props) {
    return (
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
                        bgcolor: "var(--footerBlack)",
                        '& .MuiTooltip-arrow': {
                            color: "var(--footerBlack)",
                        },
                    },
                },
            }}
            enterTouchDelay={0}
            leaveTouchDelay={10000}
            TransitionComponent={Zoom}
            arrow
        >
            <InfoIcon className={styles.infoIcon} onClick={(e) => stopPropagation ? e.stopPropagation() : ""} />
        </Tooltip>
    )
}

export default SVPTooltip