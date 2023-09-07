import CapsuleCard from "../CapsuleCard/CapsuleCard";
import styles from "./CapsuleCardSection.module.css";
import { CapsuleData } from "@/types";
import { capsuleSortFunctions } from "@/helper/sortFunctions";

type Props = {
    capsules: CapsuleData[],
    sorting: keyof typeof capsuleSortFunctions,
}

function CapsuleCardSection({ capsules, sorting }: Props) {
    const sortedCapsules = capsules ? [...capsules].sort(
        capsuleSortFunctions[sorting] || capsuleSortFunctions["default"]
    ) : [];

    return (
        <div className={styles.cardSection}>
            {sortedCapsules &&
                sortedCapsules.map((capsule) => (
                    <CapsuleCard key={capsule.name} title={capsule.name} icon={capsule.icon} stickerValue={capsule.sticker_value}
                        capsulePrice={capsule.average_price} hoverAnimation detailPage={capsule.name} />
                ))
            }
        </div>
    )
}

export default CapsuleCardSection;