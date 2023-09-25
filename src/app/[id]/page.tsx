"use client"

import PageWrapper from "@/app/PageWrapper/PageWrapper";
import styles from "./page.module.css";
import CapsuleInfo from "@/components/CapsuleInfo/CapsuleInfo";
import OutlineButton from "@/components/OutlineButton/OutlineButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import getCapsule from "@/firebase/firestore/getCapsule";
import { useEffect, useState } from "react";
import { CapsuleData } from "@/types";
import StickerWrapper from "@/components/StickerWrapper/StickerWrapper";
import CapsuleBox from "@/components/CapsuleBox/CapsuleBox";

type Props = {
  params: {
    id: string
  }
}

const dropdownValues = [
  "Price ASC",
  "Price DESC",
  "Sticker Name ASC",
  "Sticker Name DESC",
  "Rarity ASC",
  "Rarity DESC"
]

function Page({ params: { id } }: Props) {
  const [capsuleData, setCapsuleData] = useState<CapsuleData>();
  const [fetchError, setFetchError] = useState<string>();

  useEffect(() => {
    const getCapsuleData = async () => {
      try {
        const capsuleData = await getCapsule(id);
        setCapsuleData(capsuleData);
      } catch (error: any) {
        setFetchError(error.message);
      }
    }

    getCapsuleData();
  }, []);

  return (
    <>
      <PageWrapper accentColor="var(--red)" endLineBgImg="'/images/backgrounds/endLineRedBG.svg'">
        {capsuleData ?
          <>
            <div className={styles.capsuleSectionContainer}>
              <div className={styles.capsuleCardContainer}>
                <CapsuleBox icon={capsuleData.icon} alt={capsuleData.name + " image"}/>
              </div>
              <div className={styles.infoContainer}>
                <CapsuleInfo title={capsuleData.name} stickerValue={capsuleData.sticker_value}
                  capsulePrice={capsuleData.average_price} svpRatio={capsuleData.svp_ratio}/>
                <div className={styles.outlineButtonContainer}>
                  <OutlineButton href={capsuleData.steam_link} width="100%" icon={<ShoppingCartIcon style={{ fontSize: "16px" }} />}
                    text="BUY ON STEAM" fontSize="14px" />
                </div>
              </div>
            </div>
            <StickerWrapper inputId="stickerSort" dropdownValues={dropdownValues}
              stickerArr={capsuleData.stickers} />
          </>
          :
          <h1 className={styles.errorText}>
            {fetchError}
          </h1>
        }
      </PageWrapper>
    </>
  )
}

export default Page