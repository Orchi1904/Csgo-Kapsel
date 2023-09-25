import { Currencies } from "@/types";

export const getCurrencyString = (value: number | "N/A", targetCurrency: Currencies, exchangeRates: any): string => {
    const targetCurrencyValue = getTargetCurrencyValue(value, targetCurrency, exchangeRates);
    return targetCurrencyValue.toLocaleString("de-DE", { style: "currency", currency: targetCurrency }).replace(",", ".");
}

const getTargetCurrencyValue = (sourceCurrencyValue: number | "N/A", targetCurrency: Currencies, exchangeRates: any) => {
    if (sourceCurrencyValue !== "N/A") {
        console.log("RATES: " + exchangeRates);
        const targetCurrencyValue = sourceCurrencyValue * exchangeRates[targetCurrency];
        return targetCurrencyValue;
    } else {
        return "N/A";
    }
}

