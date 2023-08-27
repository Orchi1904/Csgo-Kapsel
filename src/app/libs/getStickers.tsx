import { Capsule, Sticker } from "@/types";

export default function getStickers(capsule: Capsule, itemsList: any): Sticker[] {
    const stickerArr: Sticker[] = [];
    
    capsule.stickers.map(async (sticker) => {
        const stickerItem = itemsList["Sticker | " + sticker];

        //Some stickers are not listed in the response so we have to fetch from another route
        if (!stickerItem) {
            const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=Sticker | ${sticker}&icon=1`);
            
            if (!response.ok) {
                throw new Error("Failed to load CSGO data");
            }

            const notListedSticker = await response.json();
            
            if(notListedSticker.success !== "false"){
                stickerArr.push({
                    name: sticker,
                    average_price: notListedSticker.average_price ? notListedSticker.average_price : "N/A",
                    icon: "https://steamcommunity.com/economy/image/" + notListedSticker.icon.replace("http://cdn.steamcommunity.com/economy/image/", "").slice(0, -1),
                    steam_link: `https://steamcommunity.com/market/listings/730/${sticker}`,
                    currency: notListedSticker.currency
                })
            }
        } else {

            stickerArr.push({
                name: sticker,
                average_price: stickerItem.price["7_days"]?.average ? stickerItem.price["7_days"].average : "N/A",
                icon: "https://steamcommunity.com/economy/image/" + stickerItem.icon_url,
                steam_link: `https://steamcommunity.com/market/listings/730/${sticker}`,
                currency: "USD",
            })
        }
    })

    return stickerArr;
}