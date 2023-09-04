"use client"

import NavHead from "@/components/NavHead/NavHead";
import styles from "./page.module.css";
import CapsuleCard from "@/components/CapsuleCard/CapsuleCard";
import CapsuleInfo from "@/components/CapsuleInfo/CapsuleInfo";
import OutlineButton from "@/components/OutlineButton/OutlineButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StickerCardSection from "@/components/StickerCardSection/StickerCardSection";
import InputSection from "@/components/InputSection/InputSection";
import EndLine from "@/components/EndLine/EndLine";
import getCapsule from "@/firebase/firestore/getCapsule";
import { useEffect, useState } from "react";
import { CapsuleData } from "@/types";

type Props = {
  params: {
    id: string
  }
}

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
      <NavHead />
      {capsuleData ?
        <>
          <CapsuleCard icon={capsuleData.icon} />
          <div className={styles.infoContainer}>
            <CapsuleInfo title={capsuleData.name} stickerValue={capsuleData.sticker_value}
              capsulePrice={capsuleData.average_price} />
            <OutlineButton href={capsuleData.steam_link} width="100%" icon={<ShoppingCartIcon style={{ fontSize: "14px" }} />}
              text="BUY ON STEAM" fontSize="12px" />
          </div>
          <div className={styles.stickerSectionContainer}>
            <div className={styles.stickerSectionHead}>
              <h4 className={styles.stickerSectionHeadTitle}>Stickers</h4>
              <InputSection id="stickerSort" />
            </div>
            <StickerCardSection stickerArr={capsuleData.stickers} />
            <EndLine bgImage="/images/backgrounds/endLineRedBG.svg" />
          </div>
        </>
        :
        <h1 className={styles.errorText}>
          {fetchError}
        </h1>
      }
    </>
  )
}

export default Page