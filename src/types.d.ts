export type Capsule = {
    title: string,
    icon: string,
    average_price: number,
    stickers: string[],
}

export type Sticker = {
    name: string,
    average_price: number | "N/A",
    currency: string,
    steam_link: string,
    icon: string,
}

export type StickerData = {
    stickerArr: Sticker[],
    containsAllStickers: boolean,
}

export type CapsuleData = {
    name: string,
    average_price: number | "N/A",
    currency: string,
    icon: string,
    steam_link: string,
    last_updated: number,
    contains_all_stickers: boolean,
    sticker_value: number | "N/A",
    stickers: Sticker[]
}



