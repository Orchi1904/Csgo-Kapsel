/*Todo: Update Code wegen Vercel/Netlify verbessern und testen ob es noch funktioniert
        Währungs-API implementieren->Nur EUR als base ist möglich
        Währungs-API nutzen bei Kapseln und Detailseite
        LocalStorage Code verbessern, falls man öfter den gleichen Code schreiben muss/musste
        Vercel Problem evtl. beheben (was aktuelle Daten angeht)

        Vlt CapsuleInfo auch verwenden für die Capsule bzw. zumindest Tooltip als Komponente exportieren
        Check if newest data will be instantly shown on website when older than 8h
*/

import updateData from "@/firebase/firestore/updateData";
import getStickers from "./getStickers";
import Capsules from "../../helper/capsules.json";
import { CapsuleData, Sticker } from "@/types";
import { getCapsulesFB } from "@/firebase/firestore/getCapsules";
import { headers } from 'next/headers';

export default async function getCapsules(): Promise<CapsuleData[]> {
    //Maybe fixes the static page problem
    const headersList = headers();
    const capsuleDataFB: CapsuleData[] = await getCapsulesFB();
    const lastUpdatedTimestampHours = capsuleDataFB[0].last_updated / 1000 / 3600;
    const currentTimeStampHours = new Date().getTime() / 1000 / 3600;
    const timeStampHoursDiff = currentTimeStampHours - lastUpdatedTimestampHours;

    /*Fetch new data if data is older than 8 hours, because 
      csgobackpack api updates every 8 hours*/
    if (timeStampHoursDiff > 8) {
        return await updateCapsulesFB();
        //return await getCapsulesFB();
    } else {
    return capsuleDataFB;
    }
}


async function updateCapsulesFB() {
    const response = await fetch("http://csgobackpack.net/api/GetItemsList/v2/?currency=EUR&extend=1", {next: {revalidate: 0}});
    const capsuleArr: CapsuleData[] = [];

    if (!response.ok) {
        throw new Error("Failed to load CSGO data");
    }

    const csgoData = await response.json();
    const itemsList = csgoData.items_list;

    let average_price: number | "N/A", icon: string, currency: string;

    for (const capsule of Capsules.major_capsules) {
        const item = itemsList[capsule.title];

        if (item.price["24_hours"]) {
            average_price = item.price["24_hours"].average;
        } else if (item.price["7_days"]) {
            average_price = item.price["7_days"].average;
        } else if (item.price["30_days"]) {
            average_price = item.price["30_days"].average;
        } else if (item.price["all_time"].average) {
            average_price = item.price["all_time"].average;
        } else {
            average_price = "N/A";
        }
       
        icon = "https://steamcommunity.com/economy/image/" + item.icon_url;
        currency = csgoData.currency;

        const stickerArr: Sticker[] = await getStickers(capsule, itemsList);
        const stickerValue = calculateStickerValue(stickerArr);
        const svpRatio = stickerValue !== "N/A" && average_price !== "N/A" ? stickerValue/average_price : "N/A";

        const capsuleData: CapsuleData = {
            name: capsule.title,
            average_price: average_price !== 0 ? average_price : "N/A",
            icon,
            currency,
            steam_link: `https://steamcommunity.com/market/listings/730/${capsule.title}`,
            sticker_value: stickerValue,
            svp_ratio: svpRatio,
            stickers: stickerArr,
            last_updated: 0,
        }
        capsuleArr.push(capsuleData);
        //await updateData("capsules", capsule.title, capsuleData);
    }
    return capsuleArr;
}


function calculateStickerValue(stickerArr: Sticker[]): number | "N/A" {
    let stickerValue: number | "N/A" = 0;

    stickerArr.map((sticker) => {
        if (sticker.average_price === "N/A") {
            stickerValue = "N/A";
            return;
        }

        if (stickerValue !== "N/A") {
            stickerValue += sticker.average_price;
        }
    });

    return stickerValue;
}