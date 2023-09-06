import { CapsuleData } from "@/types";

const sortFunctions = {
    "default": (a: any, b:any) => 0,
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
    let result = -5;
    
    console.log("Erstes: " + aPrice);
    console.log("Zweites: " + bPrice);

    if(aPrice === "N/A" && bPrice !== "N/A") result = 1; //eig return
    if(aPrice !== "N/A" && bPrice === "N/A") result = -1;
    if(aPrice === "N/A" && bPrice === "N/A") result = 0;

    console.log(result)

    if(result === -5){
        result = Number(aPrice) - Number(bPrice);
    }

    console.log(result);

    return result;
}

export default sortFunctions;