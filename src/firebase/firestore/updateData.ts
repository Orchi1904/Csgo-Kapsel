import { CapsuleData } from "@/types";
import { db } from "../config";
import { doc, updateDoc } from "firebase/firestore";

export default async function updateData(collection: string, id: string, data: CapsuleData) {
    let result = null;
    let error = null;

    try {
        result = await updateDoc(doc(db, collection, id), data);
    } catch (e) {
        error = e;
        console.error(error);
    }
}