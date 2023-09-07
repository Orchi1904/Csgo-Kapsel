"use client"

import React from 'react'
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
}

function CapsuleWrapper({ capsules, search, inputId, dropdownValues }: Props) {
    const [sorting, setSorting] = useState<keyof typeof capsuleSortFunctions>("default");

    return (
        <div className={styles.capsuleCardSection}>
            <InputSection search={search} id={inputId} dropdownValues={dropdownValues}
                setSorting={setSorting} />
            <CapsuleCardSection capsules={capsules} sorting={sorting} />
        </div>
    )
}

export default CapsuleWrapper;