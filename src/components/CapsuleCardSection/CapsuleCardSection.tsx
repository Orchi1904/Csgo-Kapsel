import CapsuleCard from "../CapsuleCard/CapsuleCard";
import styles from "./CapsuleCardSection.module.css";
import { CapsuleData } from "@/types";
import { capsuleSortFunctions } from "@/helper/sortFunctions";
import getExchangeRatesEUR from "@/app/libs/getExchangeRatesEUR";

type Props = {
    capsules: CapsuleData[],
    sorting: keyof typeof capsuleSortFunctions,
    searchTerm: string,
    exchangeRates: any,
}

function CapsuleCardSection({ capsules, sorting, searchTerm, exchangeRates }: Props) {    
    let sortedCapsules = capsules ? [...capsules].sort(
        capsuleSortFunctions[sorting] || capsuleSortFunctions["default"]
    ) : [];

    sortedCapsules = sortedCapsules.filter((capsule) =>
        capsule.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className={styles.cardSection}>
            {sortedCapsules &&
                sortedCapsules.map((capsule) => (
                    <CapsuleCard key={capsule.name} capsule={capsule} exchangeRates={exchangeRates}/>
                ))
            }
        </div>
    )
}

export default CapsuleCardSection;