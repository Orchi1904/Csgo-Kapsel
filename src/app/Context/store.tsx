"use client"

import { capsuleSortFunctions } from "@/helper/sortFunctions";
import { Currencies } from "@/types"
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    currency: Currencies,
    setCurrency: Dispatch<SetStateAction<Currencies>>,
    capsuleSorting: keyof typeof capsuleSortFunctions,
    setCapsuleSorting: Dispatch<SetStateAction<keyof typeof capsuleSortFunctions>>
}

const GlobalContext = createContext<ContextProps>({
    currency: "" as Currencies,
    setCurrency: () => "",
    capsuleSorting: "" as keyof typeof capsuleSortFunctions,
    setCapsuleSorting: () => "",
})

type Props = {
    children: React.ReactNode,
}

export const GlobalContextProvider = ({children}: Props) => {
    const [currency, setCurrency] = useState("€ EUR" as Currencies);
    const [capsuleSorting, setCapsuleSorting] = useState("Sort" as keyof typeof capsuleSortFunctions);

    return(
        <GlobalContext.Provider value={{currency, setCurrency, capsuleSorting, setCapsuleSorting}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);


