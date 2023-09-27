import { CapsuleData } from "@/types";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

//Promise because it is an async function
export async function getCapsulesFB(): Promise<CapsuleData[]> {
    const querySnapshot = await getDocs(collection(db, "capsules"));
    let capsulesArr: CapsuleData[] = [];

    querySnapshot.forEach((doc) => {
        capsulesArr.push(doc.data() as CapsuleData);
    })

    return capsulesArr;
}