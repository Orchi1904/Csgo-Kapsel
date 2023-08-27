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
    icon: string,
}

export type CapsuleData = {
    name: string,
    average_price: number | "N/A",
    currency: string,
    icon: string,
    last_updated: number,
    stickers: Sticker[]
}



