import { Capsule, Sticker, StickerData } from "@/types";

export default async function getStickers(capsule: Capsule, itemsList: any): Promise<StickerData> {
    const stickerArr: Sticker[] = [];
    let containsAllStickers = true;

    for (const sticker of capsule.stickers) {
        const stickerItem = itemsList["Sticker | " + sticker];

        //Fetching data from another route because the data there is better regarding average price
        const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=Sticker | ${sticker}&icon=1`);

        if (!response.ok) {
            throw new Error("Failed to load CSGO data");
        }

        const differentRouteSticker = await response.json();

        if (differentRouteSticker.success === true) {
            stickerArr.push({
                name: sticker,
                average_price: differentRouteSticker.average_price !== 0 ? parseFloat(differentRouteSticker.average_price) : "N/A",
                icon: "https://steamcommunity.com/economy/image/" + differentRouteSticker.icon.replace("http://cdn.steamcommunity.com/economy/image/", "").slice(0, -1),
                steam_link: `https://steamcommunity.com/market/listings/730/${sticker}`,
                currency: differentRouteSticker.currency
            })
        } else if (stickerItem) {
            let averagePrice: number | "N/A" = "N/A";

            //Have to do that because sometimes there is only 30_days available
            if(stickerItem.price["24_hours"]){
                averagePrice = stickerItem.price["24_hours"].average;
            }else if(stickerItem.price["7_days"]){
                averagePrice = stickerItem.price["7_days"].average;
            }else if(stickerItem.price["30_days"]){
                averagePrice = stickerItem.price["30_days"].average;
            }

            stickerArr.push({
                name: sticker,
                average_price: averagePrice !== 0 ? averagePrice : "N/A",
                icon: "https://steamcommunity.com/economy/image/" + stickerItem.icon_url,
                steam_link: `https://steamcommunity.com/market/listings/730/${sticker}`,
                currency: "USD",
            })
        } else {
            containsAllStickers = false;
        }
    }

    return { containsAllStickers, stickerArr };
}