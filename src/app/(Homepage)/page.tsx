import CapsuleWrapper from "@/components/CapsuleWrapper/CapsuleWrapper";
import getCapsules from "../../libs/getCapsules";
import updateData from "@/firebase/firestore/updateData";

const dropdownValues = [
  "Capsule Price ASC",
  "Capsule Price DESC",
  "Name ASC",
  "Name DESC",
  "Sticker Value ASC",
  "Sticker Value DESC",
  "SV/P Ratio ASC",
  "SV/P Ratio DESC",
];

async function Home() {
  const capsules = await getCapsules();

  const updateDataFB = async () => {
    for (const capsule of capsules) {
      //0 is set when the capusle data is older than 8h
      if (capsule.last_updated === 0) {
        capsule.last_updated = new Date().getTime();
        await updateData("capsules", capsule.name, capsule);
      }
    }
  };

  updateDataFB();

  return (
    <CapsuleWrapper
      inputId="capsuleSort"
      dropdownValues={dropdownValues}
      capsules={capsules}
    />
  );
}

export default Home;
