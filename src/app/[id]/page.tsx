"use client"; 

/* using client, because when using server with async/await data fetching, the cards that should be only
   shown on small devices will be shown first for about one second */

import styles from "./page.module.css";
import CapsuleInfo from "@/components/CapsuleInfo/CapsuleInfo";
import OutlineButton from "@/components/OutlineButton/OutlineButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import getCapsule from "@/firebase/firestore/getCapsule";
import StickerWrapper from "@/components/StickerWrapper/StickerWrapper";
import CapsuleBox from "@/components/CapsuleBox/CapsuleBox";
import { useEffect, useState } from "react";
import { CapsuleData } from "@/types";

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

function Page({ params: { id } }: Props) {
  const [capsuleData, setCapsuleData] = useState<CapsuleData>();
  const [fetchError, setFetchError] = useState<string>();

  useEffect(() => {
    const getCapsuleData = async () => {
      try {
        const capsuleData = await getCapsule(id);
        setCapsuleData(capsuleData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setFetchError(error.message);
        }
      }
    };

    getCapsuleData();
  }, []);

  return (
    <div>
      { capsuleData ? (
        <div>
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
        </div>
      ) : (
        <h1 className={styles.errorText}>{fetchError}</h1>
      )}
    </div>
  );
}

export default Page;
