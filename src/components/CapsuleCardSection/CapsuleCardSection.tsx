import CapsuleCard from "../CapsuleCard/CapsuleCard";
import styles from "./CapsuleCardSection.module.css";
import { CapsuleData } from "@/types";
import { capsuleSortFunctions } from "@/helper/sortFunctions";

type Props = {
    capsules: CapsuleData[],
    sorting: keyof typeof capsuleSortFunctions,
    searchTerm: string,
    infoCard?: boolean,
}

function CapsuleCardSection({ capsules, sorting, searchTerm, infoCard }: Props) {
    let sortedCapsules = capsules ? [...capsules].sort(
        capsuleSortFunctions[sorting] || capsuleSortFunctions["default"]
    ) : [];

    sortedCapsules = sortedCapsules.filter((capsule) => 
    capsule.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className={styles.cardSection}>
            {sortedCapsules &&
                sortedCapsules.map((capsule) => (
                    <CapsuleCard key={capsule.name} title={capsule.name} icon={capsule.icon} stickerValue={capsule.sticker_value}
                        capsulePrice={capsule.average_price} hoverAnimation detailPage={capsule.name} infoCard={infoCard}/>
                ))
            }
        </div>
    )
}

export default CapsuleCardSection;