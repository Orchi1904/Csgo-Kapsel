import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import { CapsuleData } from "@/types";

export default async function getExchangeRatesFB(id: string): Promise<CapsuleData> {
    const docRef = doc(db, "exchangeRates", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as CapsuleData;
    } else {
        throw new Error("No exchange rates available");
    }
}