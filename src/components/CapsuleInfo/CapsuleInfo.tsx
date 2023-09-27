"use client"

import styles from "./CapsuleInfo.module.css";
import { getCurrencyString } from "@/helper/currencyFunctions";
import { useGlobalContext } from "@/Context/store";
import SVPTooltip from "../SVPTooltip/SVPTooltip";
import { CapsuleData } from "@/types";

type Props = {
    capsule: CapsuleData,
}

function CapsuleInfo({ capsule }: Props) {
    const { currency, exchangeRates } = useGlobalContext();

    return (
        <div className={styles.capsuleInfo}>
            <h3 className={styles.title}>{capsule.name}</h3>
            <div className={styles.capsulePriceInfoContainer}>
                <div className={styles.capsulePriceInfo}>
                    <p>Sticker Value:</p>
                    <p>{getCurrencyString(capsule.sticker_value, currency, exchangeRates)}</p>
                </div>
                <div className={styles.capsulePriceInfo}>
                    <p>Capsule Price:</p>
                    <p>{getCurrencyString(capsule.average_price, currency, exchangeRates)}</p>
                </div>
                <div className={styles.capsulePriceInfo}>
                    <p className={styles.svpRatioKey}>
                        <SVPTooltip />
                        SV/P Ratio:
                    </p>
                    <p>{capsule.svp_ratio !== "N/A" ?
                        capsule.svp_ratio.toFixed(2) + " x"
                        : "N/A"
                    }</p>
                </div>
            </div>
        </div>
    )
}

export default CapsuleInfo