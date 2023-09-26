"use client"

import React, { useEffect } from 'react'
import styles from "./CapsuleWrapper.module.css";
import InputSection from '../InputSection/InputSection';
import CapsuleCardSection from '../CapsuleCardSection/CapsuleCardSection';
import { useState } from "react";
import { capsuleSortFunctions } from '@/helper/sortFunctions';
import { CapsuleData } from '@/types';
import { useGlobalContext } from '@/app/context/store';
import getExchangeRatesEUR from '@/app/libs/getExchangeRatesEUR';

type Props = {
    capsules: CapsuleData[],
    search: boolean,
    inputId: string,
    dropdownValues: string[],
}

function CapsuleWrapper({ capsules, search, inputId, dropdownValues }: Props) {
    const [sorting, setSorting] = useState<keyof typeof capsuleSortFunctions>("default");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [exchangeRates, setExchangeRates] = useState();
    const {capsuleSorting} = useGlobalContext();

    useEffect(() => {;
        setSorting(capsuleSorting);

        const getExchangeRates = async () => {
            setExchangeRates(await getExchangeRatesEUR());
        }

        console.log(exchangeRates);

        getExchangeRates();
    }, []);

    return (
        <div className={styles.capsuleCardSection}>
            <InputSection search={search} id={inputId} dropdownValues={dropdownValues}
                setSorting={setSorting} setSearchTerm={setSearchTerm}/>
            <CapsuleCardSection capsules={capsules} sorting={sorting} searchTerm={searchTerm} exchangeRates={exchangeRates}/>
        </div>
    )
}

export default CapsuleWrapper;