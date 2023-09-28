"use client"

import { useRouter } from "next/navigation";
import styles from "./CapsuleCard.module.css";
import { CapsuleData } from "@/types";
import { useGlobalContext } from "@/Context/store";
import { getCurrencyString } from "@/helper/currencyFunctions";
import SVPTooltip from "../SVPTooltip/SVPTooltip";
import Image from "next/image";

type Props = {
    capsule: CapsuleData,
}

function CapsuleCard({ capsule }: Props) {
    const { currency, exchangeRates } = useGlobalContext();
    const router = useRouter();

    return (
        <div className={styles.card} onClick={() => { router.push(capsule.name) }}>
            <h3 className={styles.title}>{capsule.name}</h3>
            <div className={styles.iconAndInformationContainer}>
                <div className={styles.iconContainer}>
                    <Image className={styles.icon} src={capsule.icon} alt={capsule.name + " image"} 
                            width={800} height={600} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                <div className={styles.informationContainer}>
                    <div className={styles.information}>
                        <p>Sticker Value: </p>
                        <p>{getCurrencyString(capsule.sticker_value, currency, exchangeRates)}</p>
                    </div>
                    <div className={styles.information}>
                        <p>Capsule Price: </p>
                        <p>{getCurrencyString(capsule.average_price, currency, exchangeRates)}</p>
                    </div>
                    <div className={styles.information}>
                        <p className={styles.svpRatioKey}>
                            <SVPTooltip stopPropagation />
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