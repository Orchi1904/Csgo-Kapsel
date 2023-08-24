//Todo: Fix issue that dreamhack 2014 cant be found + check data on website + change http icon to https or it wont work
import { Capsule } from "@/types";

export default async function getCapsules(capsules: Capsule[]) {
    const capsulesInfo: Capsule[] = [];

    //Promise.all is used so that all data fetching starts at once and will wait unitll all fetching is done
    await Promise.all(capsules.map(async (capsule) => {
        const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=${capsule.title}&icon=1`);
        const data = await response.json();
        capsulesInfo.push(data);
    }));

    return capsulesInfo;
}