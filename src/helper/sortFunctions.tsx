import { CapsuleData } from "@/types";

const sortFunctions = {
    "default": (a: any, b: any) => 0,
    "Capsule Price ASC": (a: CapsuleData, b: CapsuleData) =>
        sortNotAvailableToEnd(a.average_price, b.average_price, "ASC"),
    "Capsule Price DESC": (a: CapsuleData, b: CapsuleData) =>
        sortNotAvailableToEnd(b.average_price,  a.average_price, "DESC"),
    "Name ASC": (a: CapsuleData, b: CapsuleData) =>
        a.name.localeCompare(b.name),
    "Name DESC": (a: CapsuleData, b: CapsuleData) =>
        b.name.localeCompare(a.name),
    "Sticker Value ASC": (a: CapsuleData, b: CapsuleData) =>
        sortNotAvailableToEnd(a.sticker_value, b.sticker_value, "ASC"),
    "Sticker Value DESC": (a: CapsuleData, b: CapsuleData) =>
        sortNotAvailableToEnd(b.sticker_value, a.sticker_value, "DESC")
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

export default sortFunctions;