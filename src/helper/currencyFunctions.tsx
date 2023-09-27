import { Currencies } from "@/types";

export const getCurrencyString = (value: number | "N/A", targetCurrency: Currencies, exchangeRates: any) => {
    if (value !== "N/A" && exchangeRates) {
        const convertedValue = value * exchangeRates[targetCurrency.slice(2)];
        if (targetCurrency !== "₿ BTC") {
            return convertedValue.toLocaleString("de-DE", { style: "currency", currency: targetCurrency.slice(2) }).replace(",", ".");
        } else {
            return `${convertedValue.toFixed(8).replace(",", ".")} ₿`
        }
    } else if (!exchangeRates) {
        return value.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".");
    } else {
        return "N/A";
    }
}