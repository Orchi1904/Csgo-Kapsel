import { CapsuleData } from "@/types";

const sortFunctions = {
    "": (a: any, b:any) => 0,
    "Capsule Price ASC": (a: CapsuleData, b: CapsuleData) =>
        sortNAToEnd(Number(a.average_price), Number(b.average_price)),
    "Capsule Price DESC": (a: CapsuleData, b: CapsuleData) =>
        Number(b.average_price) - Number(a.average_price),
    "Name ASC": (a: CapsuleData, b: CapsuleData) =>
        a.name.localeCompare(b.name),
    "Name DESC": (a: CapsuleData, b: CapsuleData) =>
        b.name.localeCompare(a.name),
    "Sticker Value ASC": (a: CapsuleData, b: CapsuleData) => 
        Number(a.sticker_value) - Number(b.sticker_value),
    "Sticker Value DESC": (a: CapsuleData, b: CapsuleData) => 
        Number(b.sticker_value) - Number(a.sticker_value)
}

const sortNAToEnd = (aPrice: number | "N/A", bPrice: number | "N/A") => {
    if(aPrice === "N/A" && bPrice !== "N/A") return 1;
    if(aPrice !== "N/A" && bPrice === "N/A") return -1;
    if(aPrice === "N/A" && bPrice === "N/A") return 0;

    return Number(aPrice) - Number(bPrice);
}

export default sortFunctions;