"use client"

import { useRouter } from "next/navigation";
import styles from "./CapsuleCard.module.css";
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip, Zoom } from "@mui/material";
import { CapsuleData, Currencies } from "@/types";
import { useEffect, useState } from "react";
import getExchangeRatesEUR from "@/app/libs/getExchangeRatesEUR";
import { useGlobalContext } from "@/app/Context/store";

type Props = {
    capsule: CapsuleData,
}

function CapsuleCard({ capsule }: Props) {
    const [exchangeRates, setExchangeRates] = useState();
    const { currency } = useGlobalContext();
    const router = useRouter();

    useEffect(() => {
        const getExchangeRates = async () => {
            setExchangeRates(await getExchangeRatesEUR());
        }

        getExchangeRates();
    }, []);

    const getCurrencyString = (value: number | "N/A") => {
        if (value !== "N/A" && exchangeRates) {
            const convertedValue = value * exchangeRates[currency.slice(2)];
            if (currency !== "₿ BTC") {
                return convertedValue.toLocaleString("de-DE", { style: "currency", currency: currency.slice(2) }).replace(",", ".");
            } else {
                return `${convertedValue.toLocaleString("de-DE").replace(",", ".")} ₿`
            }
        } else if (!exchangeRates) {
            return value.toLocaleString("de-DE", {style: "currency", currency: "EUR"}).replace(",", ".");
        } else {
            return "N/A";
        }
    }

    return (
        <div className={styles.card} onClick={() => { router.push(capsule.name) }}>
            <h3 className={styles.title}>{capsule.name}</h3>
            <div className={styles.iconAndInformationContainer}>
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={capsule.icon} alt={capsule.name + " image"} />
                </div>
                <div className={styles.informationContainer}>
                    <div className={styles.information}>
                        <p>Sticker Value: </p>
                        <p>{getCurrencyString(capsule.sticker_value)}</p>
                    </div>
                    <div className={styles.information}>
                        <p>Capsule Price: </p>
                        <p>
                            {getCurrencyString(capsule.average_price)}
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
                                <InfoIcon onClick={(e) => e.stopPropagation()} />
                            </Tooltip>
                            SV/P Ratio:
                        </p>
                        <p>
                            {capsule.svp_ratio !== "N/A" ?
                                capsule.svp_ratio.toFixed(2) + " x"
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