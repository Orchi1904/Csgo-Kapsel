import { CapsuleData } from "@/types";
import app from "../../firebase/config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(app);

export default async function addData(collection: string, id: string, data: CapsuleData){
    let result = null;
    let error = null;

    try{
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        })
    }catch (e){
        error = e;
        console.log(error);
    }
}