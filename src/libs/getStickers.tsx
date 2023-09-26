import { Capsule, Sticker } from "@/types";

export default async function getStickers(capsule: Capsule, itemsList: any): Promise<Sticker[]> {
    const stickerArr: Sticker[] = [];
    let price: number | "N/A" = "N/A";

    for (const sticker of capsule.stickers) {
        const stickerItem = itemsList["Sticker | " + sticker.name]

        if (stickerItem.price["24_hours"]) {
            price = stickerItem.price["24_hours"].average;
        } else if (stickerItem.price["7_days"]) {
            price = stickerItem.price["7_days"].average;
        } else if (stickerItem.price["30_days"]) {
            price = stickerItem.price["30_days"].average;
        } else if (stickerItem.price["all_time"].average) {
            price = stickerItem.price["all_time"].average;
        } else {
            price = "N/A";
        }

        stickerArr.push({
            name: sticker.name,
            rarity: sticker.rarity,
            average_price: price !== 0 ? price : "N/A",
            icon: sticker.icon,
            steam_link: `https://steamcommunity.com/market/listings/730/Sticker | ${sticker.name}`,
            currency: "EUR",
        })
    }

    return stickerArr;
}