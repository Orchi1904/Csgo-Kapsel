/*Todo: Calculate Sticker Value for every Capsule where there is no N/A
        Implement getCapsule
        Show specific data on [id] page
        Check every Steam Link and other data
        Change code used to add data on firebase so it can be used for updating data -> Remove capsules.json, only use firebase?
*/

import addData from "@/firebase/firestore/addData";
import CapsuleInfo from "../../capsules.json";
import getStickers from "./getStickers";
import { CapsuleData, Sticker } from "@/types";
import { getCapsulesFB } from "@/firebase/firestore/getCapsules";

export default async function getCapsules(): Promise<CapsuleData[]> {

    return await getCapsulesFB();



    //Leave this code allone! It will be needed to push things as long as we are not done and will later be
    //used for updating data if needed (after 8h)
    /*const response = await fetch("http://csgobackpack.net/api/GetItemsList/v2/");

    if (!response.ok) {
        throw new Error("Failed to load CSGO data");
    }

    const csgoData = await response.json();
    const itemsList = csgoData.items_list;

    let average_price: number | "N/A", icon: string, currency: string;

    CapsuleInfo.major_capsules.map(async (capsule) => {
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

        const stickers: Sticker[] = getStickers(capsule, itemsList);

        const capsuleData: CapsuleData = {
            name: capsule.title,
            average_price,
            icon,
            currency,
            steam_link: `https://steamcommunity.com/market/listings/730/${capsule.title}`,
            stickers,
            last_updated: new Date().getTime()
        }

        await addData("capsules", capsule.title, capsuleData);
    })*/
}