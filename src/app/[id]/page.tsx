import styles from "./page.module.css";
import CapsuleInfo from "@/components/CapsuleInfo/CapsuleInfo";
import OutlineButton from "@/components/OutlineButton/OutlineButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import getCapsule from "@/firebase/firestore/getCapsule";
import StickerWrapper from "@/components/StickerWrapper/StickerWrapper";
import CapsuleBox from "@/components/CapsuleBox/CapsuleBox";

type Props = {
  params: {
    id: string;
  };
};

const dropdownValues = [
  "Price ASC",
  "Price DESC",
  "Sticker Name ASC",
  "Sticker Name DESC",
  "Rarity ASC",
  "Rarity DESC",
];

async function Page({ params: { id } }: Props) {
  const capsuleData = await getCapsule(id);
  // const [fetchError, setFetchError] = useState<string>();

  return (
    <>
      <div className={styles.capsuleSectionContainer}>
        <div className={styles.capsuleCardContainer}>
          <CapsuleBox
            icon={capsuleData.icon}
            alt={capsuleData.name + " image"}
          />
        </div>
        <div className={styles.infoContainer}>
          <CapsuleInfo capsule={capsuleData} />
          <div className={styles.outlineButtonContainer}>
            <OutlineButton
              href={capsuleData.steam_link}
              width="100%"
              icon={<ShoppingCartIcon style={{ fontSize: "16px" }} />}
              text="BUY ON STEAM"
              fontSize="14px"
            />
          </div>
        </div>
      </div>
      <StickerWrapper
        inputId="stickerSort"
        dropdownValues={dropdownValues}
        stickerArr={capsuleData.stickers}
      />
    </>
  );
}

export default Page;
