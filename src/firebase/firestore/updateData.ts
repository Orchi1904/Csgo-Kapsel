import { CapsuleData } from "@/types";
import app from "../config";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(app);

export default async function updateData(collection: string, id: string, data: CapsuleData){
    let result = null;
    let error = null;

    try{
        result = await updateDoc(doc(db, collection, id), data);
        console.log(result);
    }catch (e){
        error = e;
        console.log(error);
    }
}