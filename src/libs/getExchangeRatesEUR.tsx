"use server"

import getExchangeRatesFB from "@/firebase/firestore/getExchangeRates";
import updateData from "@/firebase/firestore/updateData";
import { headers } from 'next/headers';

export default async function getExchangeRatesEUR() {
    //Fixes the static page problem, otherwise updating data will not work on builded page
    const headersList = headers();

    const exchangeRatesFB: any = await getExchangeRatesFB("1");
    const lastUpdatedTimestampHours = exchangeRatesFB.timestamp / 3600; //Seconds to hours
    const currentTimeStampHours = new Date().getTime() / 3600000; //Milliseconds to hours
    const timeStampHoursDiff = currentTimeStampHours - lastUpdatedTimestampHours;

    if(timeStampHoursDiff > 1){
        const updatedExchangeRates = await updateExchangeRates();
        return updatedExchangeRates.rates;
    }else{
        return exchangeRatesFB.rates;
    }
}

const updateExchangeRates = async () => {
    const response = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.NEXT_PUBLIC_FIXER_API_KEY}`)
    const exchangeRates = await response.json();
    updateData("exchangeRates", "1", exchangeRates);
    return exchangeRates;
}