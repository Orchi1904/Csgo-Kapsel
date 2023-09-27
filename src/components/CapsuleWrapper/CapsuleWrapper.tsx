"use client"

import React from 'react'
import styles from "./CapsuleWrapper.module.css";
import InputSection from '../InputSection/InputSection';
import CapsuleCardSection from '../CapsuleCardSection/CapsuleCardSection';
import { useState } from "react";
import { CapsuleData } from '@/types';
import { useGlobalContext } from '@/Context/store';

type Props = {
    capsules: CapsuleData[],
    search: boolean,
    inputId: string,
    dropdownValues: string[],
}

function CapsuleWrapper({ capsules, search, inputId, dropdownValues }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const {capsuleSorting, setCapsuleSorting} = useGlobalContext();

    return (
        <div className={styles.capsuleCardSectionContainer}>
            <InputSection search={search} id={inputId} dropdownValues={dropdownValues} type="capsuleSort"
                setSorting={setCapsuleSorting} setSearchTerm={setSearchTerm}/>
            <CapsuleCardSection capsules={capsules} sorting={capsuleSorting} searchTerm={searchTerm} />
        </div>
    )
}

export default CapsuleWrapper;