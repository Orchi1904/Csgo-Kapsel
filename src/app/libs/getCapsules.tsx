//Todo: Newest Cases have to be found through single search + check data on website + change http icon to https or it wont work
//+ Look at Firebase Next.js Website I saved on Chrome + remove current firebase code
import CapsuleInfo from "../../capsules.json";

export default async function getCapsules() {
    const response = await fetch("http://csgobackpack.net/api/GetItemsList/v2/");

    if(!response.ok){
        throw new Error("Failed to load CSGO data");
    }

    const csgoData = await response.json();
    const itemsList = csgoData.items_list;

    CapsuleInfo.major_capsules.map((capsule) => {
        const item = itemsList[capsule.title];
        console.log(item?.name);
    })

   


    //Promise.all is used so that all data fetching starts at once and will wait unitll all fetching is done
    /*await Promise.all(capsules.map(async (capsule) => {
        const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=${capsule.title}&icon=1`);
        const data = await response.json();
        capsulesInfo.push(data);
    }));

    return capsulesInfo;*/
}