import { Currencies } from "@/types";

export const getCurrencyString = (value: number | "N/A", targetCurrency: Currencies, exchangeRates: any) => {
    const exchangeRate = exchangeRates[targetCurrency.slice(2)];

    if (value !== "N/A" && exchangeRate !== undefined) {
        const convertedValue = value * exchangeRate;
        if (targetCurrency !== "₿ BTC") {
            return convertedValue.toLocaleString("de-DE", { style: "currency", currency: targetCurrency.slice(2) }).replace(",", ".");
        } else {
            return `${convertedValue.toFixed(8).replace(",", ".")} ₿`
        }
    } else if (exchangeRate === undefined) {
        return value.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".");
    } else {
        return "N/A";
    }
}