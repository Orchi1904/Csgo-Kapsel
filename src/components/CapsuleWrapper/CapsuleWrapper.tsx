"use client"

import React, { useEffect } from 'react'
import styles from "./CapsuleWrapper.module.css";
import InputSection from '../InputSection/InputSection';
import CapsuleCardSection from '../CapsuleCardSection/CapsuleCardSection';
import { useState } from "react";
import { capsuleSortFunctions } from '@/helper/sortFunctions';
import { CapsuleData } from '@/types';
import { useGlobalContext } from '@/Context/store';
import getExchangeRatesEUR from '@/libs/getExchangeRatesEUR';

type Props = {
    capsules: CapsuleData[],
    search: boolean,
    inputId: string,
    dropdownValues: string[],
}

function CapsuleWrapper({ capsules, search, inputId, dropdownValues }: Props) {
    const [sorting, setSorting] = useState<keyof typeof capsuleSortFunctions>("default");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const {capsuleSorting} = useGlobalContext();

    useEffect(() => {;
        setSorting(capsuleSorting);
    }, []);

    return (
        <div className={styles.capsuleCardSection}>
            <InputSection search={search} id={inputId} dropdownValues={dropdownValues} type="capsuleSort"
                setSorting={setSorting} setSearchTerm={setSearchTerm}/>
            <CapsuleCardSection capsules={capsules} sorting={sorting} searchTerm={searchTerm} />
        </div>
    )
}

export default CapsuleWrapper;