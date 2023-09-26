"use client"

import { capsuleSortFunctions } from "@/helper/sortFunctions";
import { Currencies } from "@/types"
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    currency: Currencies,
    setCurrency: Dispatch<SetStateAction<Currencies>>,
    capsuleSorting: keyof typeof capsuleSortFunctions,
    setCapsuleSorting: Dispatch<SetStateAction<keyof typeof capsuleSortFunctions>>,
    exchangeRates: any,
    setExchangeRates: Dispatch<SetStateAction<any>>
}

const GlobalContext = createContext<ContextProps>({
    currency: "" as Currencies,
    setCurrency: () => "",
    capsuleSorting: "" as keyof typeof capsuleSortFunctions,
    setCapsuleSorting: () => "",
    exchangeRates: {},
    setExchangeRates: () => "" 
})

type Props = {
    children: React.ReactNode,
}

export const GlobalContextProvider = ({children}: Props) => {
    const [currency, setCurrency] = useState("€ EUR" as Currencies);
    const [capsuleSorting, setCapsuleSorting] = useState("Sort" as keyof typeof capsuleSortFunctions);
    const [exchangeRates, setExchangeRates] = useState({});

    return(
        <GlobalContext.Provider value={{currency, setCurrency, capsuleSorting, setCapsuleSorting,
                                        exchangeRates, setExchangeRates}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);


