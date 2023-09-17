import { Capsule, Sticker } from "@/types";

export default async function getStickers(capsule: Capsule, itemsList: any): Promise<Sticker[]> {
    const stickerArr: Sticker[] = [];
    let price: number | "N/A" = "N/A"; 

    for (const sticker of capsule.stickers) {
        const stickerItem = itemsList["Sticker | " + sticker.name];

        //Fetching data from another route because some stickers are not in current route response
        if (!stickerItem) {
            const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=Sticker | ${sticker}&icon=1`);

            if (!response.ok) {
                throw new Error("Failed to load CSGO data");
            }

            const differentRouteSticker = await response.json();

            if (differentRouteSticker.success === true) {
                price = differentRouteSticker.average_price !== 0 ? Number(differentRouteSticker.average_price) : "N/A";
            } else {
                price = "N/A";
            }
        } else {
            //Have to do that because sometimes there is only 30_days available
            if (stickerItem.price["24_hours"]) {
                price = stickerItem.price["24_hours"].average;
            } else if (stickerItem.price["7_days"]) {
                price = stickerItem.price["7_days"].average;
            } else if (stickerItem.price["30_days"]) {
                price = stickerItem.price["30_days"].average;
            }
        }

        stickerArr.push({
            name: sticker.name,
            rarity: sticker.rarity,
            average_price: price !== 0 ? price : "N/A",
            icon: sticker.icon,
            steam_link: `https://steamcommunity.com/market/listings/730/Sticker | ${sticker.name}`,
            currency: "USD",
        })
    }

    return stickerArr;
}