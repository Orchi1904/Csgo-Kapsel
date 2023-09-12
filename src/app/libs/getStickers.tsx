import { Capsule, Sticker, StickerData } from "@/types";

export default async function getStickers(capsule: Capsule, itemsList: any): Promise<StickerData> {
    const stickerArr: Sticker[] = [];
    let containsAllStickers = true;

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
                stickerArr.push({
                    name: sticker.name,
                    rarity: sticker.rarity,
                    average_price: differentRouteSticker.average_price !== 0 ? Number(differentRouteSticker.average_price) : "N/A",
                    icon: "https://steamcommunity.com/economy/image/" + differentRouteSticker.icon.replace("http://cdn.steamcommunity.com/economy/image/", "").slice(0, -1),
                    steam_link: `https://steamcommunity.com/market/listings/730/Sticker | ${sticker.name}`,
                    currency: differentRouteSticker.currency
                })
            } else {
                containsAllStickers = false;
            }
        } else {
            let averagePrice: number = 0;

            //Have to do that because sometimes there is only 30_days available
            if (stickerItem.price["24_hours"]) {
                averagePrice = stickerItem.price["24_hours"].average;
            } else if (stickerItem.price["7_days"]) {
                averagePrice = stickerItem.price["7_days"].average;
            } else if (stickerItem.price["30_days"]) {
                averagePrice = stickerItem.price["30_days"].average;
            }

            stickerArr.push({
                name: sticker.name,
                rarity: sticker.rarity,
                average_price: averagePrice !== 0 ? Number(averagePrice) : "N/A",
                icon: "https://steamcommunity.com/economy/image/" + stickerItem.icon_url,
                steam_link: `https://steamcommunity.com/market/listings/730/Sticker | ${sticker.name}`,
                currency: "USD",
            })
        }
    }

    return { containsAllStickers, stickerArr };
}