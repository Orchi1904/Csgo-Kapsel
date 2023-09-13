"use client"

import React, { useEffect } from 'react'
import styles from "./CapsuleWrapper.module.css";
import InputSection from '../InputSection/InputSection';
import CapsuleCardSection from '../CapsuleCardSection/CapsuleCardSection';
import { useState } from "react";
import { capsuleSortFunctions } from '@/helper/sortFunctions';
import { CapsuleData } from '@/types';

type Props = {
    capsules: CapsuleData[],
    search: boolean,
    inputId: string,
    dropdownValues: string[],
    infoCard?: boolean,
}

function CapsuleWrapper({ capsules, search, inputId, dropdownValues, infoCard }: Props) {
    const [sorting, setSorting] = useState<keyof typeof capsuleSortFunctions>("default");
    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <div className={styles.capsuleCardSection}>
            <InputSection search={search} id={inputId} dropdownValues={dropdownValues}
                setSorting={setSorting} setSearchTerm={setSearchTerm}/>
            <CapsuleCardSection capsules={capsules} sorting={sorting} searchTerm={searchTerm} infoCard={infoCard}/>
        </div>
    )
}

export default CapsuleWrapper;