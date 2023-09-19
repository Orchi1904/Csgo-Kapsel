import { Capsule, Sticker } from "@/types";

export default async function getStickers(capsule: Capsule): Promise<Sticker[]> {
    const stickerArr: Sticker[] = [];
    let price: number | "N/A" = "N/A";

    for (const sticker of capsule.stickers) {
        const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=Sticker | ${sticker.name}&extend=1&icon=1`);
        
        if (!response.ok) {
            throw new Error("Failed to load CSGO data");
        }

        const stickerItem = await response.json();

        if (stickerItem.success === true) {
            price = stickerItem.average_price !== 0 ? Number(stickerItem.average_price) : "N/A";
        } else {
            price = "N/A";
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