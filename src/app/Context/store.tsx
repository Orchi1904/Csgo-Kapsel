"use client"

import { Currencies } from "@/types"
import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";

interface ContextProps {
    currency: Currencies,
    setCurrency: Dispatch<SetStateAction<Currencies>>
}

const GlobalContext = createContext<ContextProps>({
    currency: "" as Currencies,
    setCurrency: () => "",
})

type Props = {
    children: React.ReactNode,
}

export const GlobalContextProvider = ({children}: Props) => {
    const [currency, setCurrency] = useState("€ EUR" as Currencies);

    return(
        <GlobalContext.Provider value={{currency, setCurrency}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);


