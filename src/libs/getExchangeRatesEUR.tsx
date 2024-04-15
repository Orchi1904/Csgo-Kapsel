"use server";

import getExchangeRatesFB from "@/firebase/firestore/getExchangeRates";
import updateData from "@/firebase/firestore/updateData";
import { headers } from "next/headers";

export default async function getExchangeRatesEUR() {
  //Fixes the static page problem, otherwise updating data will not work on builded page
  const headersList = headers();

  const exchangeRatesFB: any = await getExchangeRatesFB("1");
  const lastUpdatedTimestampHours = exchangeRatesFB.timestamp / 3600; //Seconds to hours
  const currentTimeStampHours = new Date().getTime() / 3600000; //Milliseconds to hours
  const timeStampHoursDiff = currentTimeStampHours - lastUpdatedTimestampHours;

  const updatedExchangeRates = await updateExchangeRates();

  if (timeStampHoursDiff > 48) {
    updateData("exchangeRates", "1", updatedExchangeRates);
  }

  return updatedExchangeRates;
}

const updateExchangeRates = async () => {
  const response = await fetch(
    `http://data.fixer.io/api/latest?access_key=${process.env.NEXT_PUBLIC_FIXER_API_KEY}`,
    { next: { revalidate: 60 * 60 * 48 } } //Revalidate at most every 48 hours
  );
  const exchangeRates = await response.json();

  return exchangeRates;
};
