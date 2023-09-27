"use client"

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import styles from "./page.module.css";
import CapsuleInfo from "@/components/CapsuleInfo/CapsuleInfo";
import OutlineButton from "@/components/OutlineButton/OutlineButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import getCapsule from "@/firebase/firestore/getCapsule";
import { useEffect, useState } from "react";
import { CapsuleData } from "@/types";
import StickerWrapper from "@/components/StickerWrapper/StickerWrapper";
import CapsuleBox from "@/components/CapsuleBox/CapsuleBox";
import { TailSpin } from "react-loader-spinner";

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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCapsuleData = async () => {
      try {
        setLoading(true);
        const capsuleData = await getCapsule(id);
        setCapsuleData(capsuleData);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setFetchError(error.message);
        }
        setLoading(false);
      }
    }

    getCapsuleData();
  }, []);

  return (
    <>
      <PageWrapper accentColor="var(--red)" endLineBgImg="'/images/backgrounds/endLineRedBG.svg'">
        {loading ?
          <div className={styles.loadingContainer}>
            <TailSpin
              height="80"
              width="80"
              color="var(--red)"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{ display: "flex", justifyContent: "center", }}
            />
          </div>
          : capsuleData ?
            <>
              <div className={styles.capsuleSectionContainer}>
                <div className={styles.capsuleCardContainer}>
                  <CapsuleBox icon={capsuleData.icon} alt={capsuleData.name + " image"} />
                </div>
                <div className={styles.infoContainer}>
                  <CapsuleInfo capsule={capsuleData} />
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