import CapsuleCard from "../CapsuleCard/CapsuleCard";
import styles from "./CapsuleCardSection.module.css";
import { CapsuleData } from "@/types";
import { capsuleSortFunctions } from "@/helper/sortFunctions";
import getExchangeRatesEUR from "@/libs/getExchangeRatesEUR";

type Props = {
    capsules: CapsuleData[],
    sorting: keyof typeof capsuleSortFunctions,
    searchTerm: string,
}

function CapsuleCardSection({ capsules, sorting, searchTerm }: Props) {    
    let sortedCapsules = capsules ? [...capsules].sort(
        capsuleSortFunctions[sorting] || capsuleSortFunctions["default"]
    ) : [];

    sortedCapsules = sortedCapsules.filter((capsule) =>
        capsule.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className={styles.cardSection}>
            {sortedCapsules &&
                sortedCapsules.map((capsule) => (
                    <CapsuleCard key={capsule.name} capsule={capsule} />
                ))
            }
        </div>
    )
}

export default CapsuleCardSection;