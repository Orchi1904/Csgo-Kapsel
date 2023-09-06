"use client"

import React from 'react'
import styles from "./StickerWrapper.module.css";
import InputSection from '../InputSection/InputSection';
import StickerCardSection from '../StickerCardSection/StickerCardSection';
import { useState } from "react";
import { stickerSortFunctions } from '@/helper/sortFunctions';
import { Sticker } from '@/types';

type Props = {
    search?: boolean,
    inputId: string,
    dropdownValues: string[],
    stickerArr: Sticker[],
}

function StickerWrapper({ search, inputId, dropdownValues, stickerArr }: Props) {
    const [sorting, setSorting] = useState<keyof typeof stickerSortFunctions>("default");

    return (
        <div className={styles.stickerCardSection}>
            <InputSection search={search} id={inputId} dropdownValues={dropdownValues}
                setSorting={setSorting} />
            <StickerCardSection stickerArr={stickerArr} sorting={sorting} />
        </div>
    )
}

export default StickerWrapper;