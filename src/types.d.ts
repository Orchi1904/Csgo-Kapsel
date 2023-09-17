export type Capsule = {
    title: string,
    icon: string,
    average_price: number,
    stickers: StickerJson[],
}

export type Sticker = {
    name: string,
    rarity: string,
    average_price: number | "N/A",
    currency: string,
    steam_link: string,
    icon: string,
}

export type StickerJson = {
    name: string,
    rarity: string,
    icon: string,
}

export type CapsuleData = {
    name: string,
    average_price: number | "N/A",
    currency: string,
    icon: string,
    steam_link: string,
    last_updated: number,
    sticker_value: number | "N/A",
    svp_ratio: number | "N/A",
    stickers: Sticker[]
}



