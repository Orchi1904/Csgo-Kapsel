/*Todo: Bessere Möglichkeit finden, um localStorage für Dropdown zu nutzen
        Währungs-API implementieren
        Check if Vercel works now after 8h

        Vlt CapsuleInfo auch verwenden für die Capsule bzw. zumindest Tooltip als Komponente exportieren
        Check if newest data will be instantly shown on website when older than 8h
*/

import updateData from "@/firebase/firestore/updateData";
import getStickers from "./getStickers";
import Capsules from "../../helper/capsules.json";
import { CapsuleData, Sticker } from "@/types";
import { getCapsulesFB } from "@/firebase/firestore/getCapsules";

export default async function getCapsules(): Promise<CapsuleData[]> {

    const capsuleDataFB: CapsuleData[] = await getCapsulesFB();
    const lastUpdatedTimestampHours = capsuleDataFB[0].last_updated / 1000 / 3600;
    const currentTimeStampHours = new Date().getTime() / 1000 / 3600;
    const timeStampHoursDiff = currentTimeStampHours - lastUpdatedTimestampHours;

    /*Fetch new data if data is older than 8 hours, because 
      csgobackpack api updates every 8 hours*/
    if (timeStampHoursDiff > 8) {
        await updateCapsulesFB();
        return await getCapsulesFB();
    } else {
        return capsuleDataFB;
    }
}


async function updateCapsulesFB() {
    let average_price: number | "N/A", icon: string, currency: string;

    for (const capsule of Capsules.major_capsules) {
        const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=${capsule.title}&extend=1&icon=1`);

        if (!response.ok) {
            throw new Error("Failed to load CSGO data");
        }

        const capsuleItem = await response.json();

        average_price = capsuleItem.average_price ? Number(capsuleItem.average_price) : "N/A";
        icon = "https://steamcommunity.com/economy/image/" + capsuleItem.icon?.replace("http://cdn.steamcommunity.com/economy/image/", "").slice(0, -1);
        currency = capsuleItem.currency;

        const stickerArr: Sticker[] = await getStickers(capsule);

        const stickerValue = calculateStickerValue(stickerArr);
        const svpRatio = stickerValue !== "N/A" && average_price !== "N/A" ? stickerValue / average_price : "N/A";

        const capsuleData: CapsuleData = {
            name: capsule.title,
            average_price: average_price !== 0 ? average_price : "N/A",
            icon,
            currency,
            steam_link: `https://steamcommunity.com/market/listings/730/${capsule.title}`,
            sticker_value: stickerValue,
            svp_ratio: svpRatio,
            stickers: stickerArr,
            last_updated: new Date().getTime()
        }
        await updateData("capsules", capsule.title, capsuleData);
    }
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