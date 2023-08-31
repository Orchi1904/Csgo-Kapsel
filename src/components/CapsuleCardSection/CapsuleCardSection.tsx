import CapsuleCard from "../CapsuleCard/CapsuleCard";
import styles from "./CapsuleCardSection.module.css";
import getCapsules from "../../app/libs/getCapsules";

async function CardSection() {
    const capsules = await getCapsules();

    return (
        <div className={styles.cardSection}>
            {capsules.map((capsule) => (
                <CapsuleCard key={capsule.name} title={capsule.name} icon={capsule.icon} stickerValue={capsule.sticker_value}
                    capsulePrice={capsule.average_price} hoverAnimation detailPage={capsule.name}/>
            ))}
        </div>
    )
}

export default CardSection