import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import { CapsuleData } from "@/types";

export default async function getCapsule(id: string): Promise<CapsuleData> {
    let cleanedId = id;

    if (id.includes("%20")) {
        cleanedId = id.replaceAll("%20", " ");
    }

    const docRef = doc(db, "capsules", cleanedId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as CapsuleData;
    } else {
        throw new Error("Capsule not found");
    }
}