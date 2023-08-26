//Todo: Check data on website + change http icon to https or it wont work
//+ Look at Firebase Next.js Website I saved on Chrome + remove current firebase code
import CapsuleInfo from "../../capsules.json";

export default async function getCapsules() {
    const response = await fetch("http://csgobackpack.net/api/GetItemsList/v2/");

    if (!response.ok) {
        throw new Error("Failed to load CSGO data");
    }

    const csgoData = await response.json();
    const itemsList = csgoData.items_list;

    CapsuleInfo.major_capsules.map(async (capsule) => {
        const item = itemsList[capsule.title];

        //Some capsules are not listed in the response so we have to fetch from another route
        if (!item) {
            const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=${capsule.title}&icon=1`);

            if (!response.ok) {
                throw new Error("Failed to load CSGO data");
            }

            const notListedItem = await response.json();
            console.log(capsule.title);
            console.log(notListedItem.average_price);
        } else {

            console.log(item?.name);
        }
    })




    //Promise.all is used so that all data fetching starts at once and will wait unitll all fetching is done
    /*await Promise.all(capsules.map(async (capsule) => {
        const response = await fetch(`http://csgobackpack.net/api/GetItemPrice/?id=${capsule.title}&icon=1`);
        const data = await response.json();
        capsulesInfo.push(data);
    }));

    return capsulesInfo;*/
}