"use client"

import React, { useEffect } from 'react'
import styles from "./CapsuleWrapper.module.css";
import InputSection from '../InputSection/InputSection';
import CapsuleCardSection from '../CapsuleCardSection/CapsuleCardSection';
import { useState } from "react";
import { capsuleSortFunctions } from '@/helper/sortFunctions';
import { CapsuleData } from '@/types';
import { useGlobalContext } from '@/app/Context/store';
import getExchangeRatesEUR from '@/app/libs/getExchangeRatesEUR';

type Props = {
    capsules: CapsuleData[],
    search: boolean,
    inputId: string,
    dropdownValues: string[],
    exchangeRates: any,
}

function CapsuleWrapper({ capsules, search, inputId, dropdownValues, exchangeRates }: Props) {
    const [sorting, setSorting] = useState<keyof typeof capsuleSortFunctions>("default");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const {capsuleSorting, setExchangeRates} = useGlobalContext();

    useEffect(() => {;
        setSorting(capsuleSorting);
        setExchangeRates(exchangeRates);
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