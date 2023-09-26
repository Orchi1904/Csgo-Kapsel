import { useGlobalContext } from "@/app/Context/store";


export const getCurrencyString = (value: number | "N/A") => {
    const { currency, exchangeRates } = useGlobalContext();

    if (value !== "N/A" && exchangeRates) {
        const convertedValue = value * exchangeRates[currency.slice(2)];
        if (currency !== "₿ BTC") {
            return convertedValue.toLocaleString("de-DE", { style: "currency", currency: currency.slice(2) }).replace(",", ".");
        } else {
            return `${convertedValue.toLocaleString("de-DE").replace(",", ".")} ₿`
        }
    } else if (!exchangeRates) {
        return value.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".");
    } else {
        return "N/A";
    }
}