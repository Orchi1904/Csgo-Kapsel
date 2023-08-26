/*Todo: Install GitHub Copilot
        Improve code (also look which other things might be undefined, use types...), fix any
        Comment out this code and use current data from firebase to display things
        Change code used to add data on firebase so it can be used for updating data -> Remove capsules.json, only use firebase
*/

import addData from "@/firebase/firestore/addData";
import CapsuleInfo from "../../capsules.json";
import getStickers from "./getStickers";

export default async function getCapsules() {
    const response = await fetch("http://csgobackpack.net/api/GetItemsList/v2/");

    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    if (!response.ok) {
        throw new Error("Failed to load CSGO data");
    }

    const csgoData = await response.json();
    const itemsList = csgoData.items_list;

    CapsuleInfo.major_capsules.map(async (capsule) => {
        const item = itemsList[capsule.title];

        //Some capsules are not listed in the response so we have to fetch from another route
        if (!item) {
            const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=${capsule.title}&icon=1`);

            if (!response.ok) {
                throw new Error("Failed to load CSGO data");
            }

            const notListedItem = await response.json();

            const notListedCapsuleSticker = await getStickers(capsule, itemsList);
            
            const fbData = {
                name: capsule.title,
                average_price: notListedItem.average_price ? notListedItem.average_price : "N/A",
                icon: notListedItem.icon.replace("http://cdn.steamcommunity.com/economy/image/", "").slice(0, -1),
                currency: notListedItem.currency,
                stickers: notListedCapsuleSticker,
                last_updated: currentTime
            }
            await addData("capsules", capsule.title, fbData)
        } else {
            const listedCapsuleSticker: any = await getStickers(capsule, itemsList);

            const fbData = {
                name: capsule.title,
                average_price: item.price["7_days"]?.average ? item.price["7_days"].average : "N/A",
                icon: item.icon_url,
                currency: csgoData.currency,
                stickers: listedCapsuleSticker,
                last_updated: currentTime
            }

            await addData("capsules", capsule.title, fbData)
        }
    })
}