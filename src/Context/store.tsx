"use client"

import { capsuleSortFunctions } from "@/helper/sortFunctions";
import getExchangeRatesEUR from "@/libs/getExchangeRatesEUR";
import { Currencies } from "@/types"
import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";

interface ContextProps {
    currency: Currencies,
    setCurrency: Dispatch<SetStateAction<Currencies>>,
    capsuleSorting: keyof typeof capsuleSortFunctions,
    setCapsuleSorting: Dispatch<SetStateAction<keyof typeof capsuleSortFunctions>>,
    exchangeRates: any,
}

const GlobalContext = createContext<ContextProps>({
    currency: "" as Currencies,
    setCurrency: () => "",
    capsuleSorting: "" as keyof typeof capsuleSortFunctions,
    setCapsuleSorting: () => "",
    exchangeRates: {},
})

type Props = {
    children: React.ReactNode,
}

export const GlobalContextProvider = ({children}: Props) => {
    const [currency, setCurrency] = useState("$ EUR" as Currencies);
    const [capsuleSorting, setCapsuleSorting] = useState("Sort" as keyof typeof capsuleSortFunctions);
    const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
        const getExchangeRates = async () => {
            const exchangeRatesEUR = await getExchangeRatesEUR();
            setExchangeRates(exchangeRatesEUR);
        }
        
        getExchangeRates();
    }, []);

    return(
        <GlobalContext.Provider value={{currency, setCurrency, capsuleSorting, setCapsuleSorting,
                                        exchangeRates}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);


