import { Currencies, ExchangeRates } from "@/types";

export const getCurrencyString = (value: number | "N/A", targetCurrency: Currencies, exchangeRates: ExchangeRates) => {
    const exchangeRate = exchangeRates?.rates[targetCurrency.slice(2)];

    if (value !== "N/A" && exchangeRate) {
        const convertedValue = value * exchangeRate;
        return targetCurrency !== "₿ BTC" ?
            convertedValue.toLocaleString("de-DE", { style: "currency", currency: targetCurrency.slice(2) }).replace(",", ".")
            : `${convertedValue.toFixed(8).replace(",", ".")} ₿`
    } else if (!exchangeRate) {
        return value.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".");
    } else {
        return "N/A";
    }
}