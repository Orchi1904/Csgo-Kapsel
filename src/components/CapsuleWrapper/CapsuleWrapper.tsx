"use client"

import React from 'react'
import styles from "./CapsuleWrapper.module.css";
import InputSection from '../InputSection/InputSection';
import CapsuleCardSection from '../CapsuleCardSection/CapsuleCardSection';
import { useState, useEffect } from "react";
import sortFunctions from '@/helper/sortFunctions';

type Props = {
    search: boolean,
    inputId: string,
    dropdownValues: string[],
}

function CapsuleWrapper({ search, inputId, dropdownValues }: Props) {
    const [sorting, setSorting] = useState<keyof typeof sortFunctions>("default");

    return (
        <div className={styles.capsuleCardSection}>
            <InputSection search={search} id={inputId} dropdownValues={dropdownValues} 
                          setSorting={setSorting}/>
            <CapsuleCardSection sorting={sorting}/>
        </div>
    )
}

export default CapsuleWrapper;