import { CapsuleData, Sticker } from "@/types";

export const capsuleSortFunctions = {
    "default": (a: any, b: any) => 0,
    "Capsule Price ASC": (a: CapsuleData, b: CapsuleData) =>
        sortNotAvailableToEnd(a.average_price, b.average_price, "ASC"),
    "Capsule Price DESC": (a: CapsuleData, b: CapsuleData) =>
        sortNotAvailableToEnd(b.average_price, a.average_price, "DESC"),
    "Name ASC": (a: CapsuleData, b: CapsuleData) =>
        a.name.localeCompare(b.name),
    "Name DESC": (a: CapsuleData, b: CapsuleData) =>
        b.name.localeCompare(a.name),
    "Sticker Value ASC": (a: CapsuleData, b: CapsuleData) =>
        sortNotAvailableToEnd(a.sticker_value, b.sticker_value, "ASC"),
    "Sticker Value DESC": (a: CapsuleData, b: CapsuleData) =>
        sortNotAvailableToEnd(b.sticker_value, a.sticker_value, "DESC")
}

export const stickerSortFunctions = {
    "default": (a: any, b: any) => 0,
    "Price ASC": (a: Sticker, b: Sticker) =>
        sortNotAvailableToEnd(a.average_price, b.average_price, "ASC"),
    "Price DESC": (a: Sticker, b: Sticker) =>
        sortNotAvailableToEnd(b.average_price, a.average_price, "DESC"),
    "Name ASC": (a: Sticker, b: Sticker) =>
        a.name.localeCompare(b.name),
    "Name DESC": (a: Sticker, b: Sticker) =>
        b.name.localeCompare(a.name),
    "Rarity ASC": (a: Sticker, b: Sticker) => 
        sortRarity(a.rarity, b.rarity),
    "Rarity DESC": (a: Sticker, b: Sticker) =>
        sortRarity(b.rarity, a.rarity)
    
}

//Is needed so that "N/A" will be sorted to the end
const sortNotAvailableToEnd = (aPrice: number | "N/A", bPrice: number | "N/A", sortType: "ASC" | "DESC") => {
    const keepOriginalOrder = 0;
    const sortAafterB = sortType === "ASC" ? 1 : -1;
    const sortAbeforeB = sortType === "ASC" ? -1 : 1;

    if (aPrice === "N/A" && bPrice === "N/A") return keepOriginalOrder;
    if (aPrice === "N/A") return sortAafterB;
    if (bPrice === "N/A") return sortAbeforeB;

    return aPrice - bPrice;
}

const sortRarity = (aRarity: string, bRarity: string) => {
    const rarityOrder = {
        "default": 1,
        "glitter": 2,
        "holo": 3,
        "foil": 4,
        "gold": 5
    }

    const aRarityIndex = aRarity as keyof typeof rarityOrder;
    const bRarityIndex = bRarity as keyof typeof rarityOrder;
    
    let aRarityValue = rarityOrder[aRarityIndex] || 0;
    let bRarityValue = rarityOrder[bRarityIndex] || 0;

    return aRarityValue - bRarityValue;
}