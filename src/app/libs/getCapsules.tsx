/*Todo: When scrolling on main page it also scrolls on id page -> fix this! -> BUT HOWWWW????
        -> Check if there are answers on StackOverflow
        Check if newest data will be instantly shown on website when older than 8h
        Footer als Aufgabe in Jira hinzufügen
*/

import updateData from "@/firebase/firestore/updateData";
import getStickers from "./getStickers";
import Capsules from "../../capsules.json";
import { CapsuleData, Sticker, StickerData } from "@/types";
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
    const response = await fetch("http://csgobackpack.net/api/GetItemsList/v2/");

    if (!response.ok) {
        throw new Error("Failed to load CSGO data");
    }

    const csgoData = await response.json();
    const itemsList = csgoData.items_list;

    let average_price: number | "N/A", icon: string, currency: string;

    for (const capsule of Capsules.major_capsules) {
        const item = itemsList[capsule.title];

        //Some capsules are not listed in the response so we have to fetch from another route
        if (!item) {
            const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=${capsule.title}&icon=1`);

            if (!response.ok) {
                throw new Error("Failed to load CSGO data");
            }

            const notListedCapsule = await response.json();

            average_price = notListedCapsule.average_price ? notListedCapsule.average_price : "N/A";
            icon = "https://steamcommunity.com/economy/image/" + notListedCapsule.icon.replace("http://cdn.steamcommunity.com/economy/image/", "").slice(0, -1);
            currency = notListedCapsule.currency;
        } else {
            average_price = item.price["7_days"]?.average ? item.price["7_days"].average : "N/A";
            icon = "https://steamcommunity.com/economy/image/" + item.icon_url;
            currency = csgoData.currency;
        }

        const stickerData: StickerData = await getStickers(capsule, itemsList);

        const stickerValue = calculateStickerValue(stickerData.containsAllStickers, stickerData.stickerArr);

        const capsuleData: CapsuleData = {
            name: capsule.title,
            average_price,
            icon,
            currency,
            steam_link: `https://steamcommunity.com/market/listings/730/${capsule.title}`,
            contains_all_stickers: stickerData.containsAllStickers,
            sticker_value: stickerValue,
            stickers: stickerData.stickerArr,
            last_updated: new Date().getTime()
        }
        await updateData("capsules", capsule.title, capsuleData);
    }
}


function calculateStickerValue(containsAllStickers: boolean, stickerArr: Sticker[]): number | "N/A" {
    if (!containsAllStickers) {
        return "N/A";
    }

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