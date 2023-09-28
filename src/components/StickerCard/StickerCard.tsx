"use client"

import Link from "next/link";
import styles from "./StickerCard.module.css";
import { useEffect, useState } from "react";
import OutlineButton from "../OutlineButton/OutlineButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getCurrencyString } from "@/helper/currencyFunctions";
import { useGlobalContext } from "@/Context/store";
import { Sticker } from "@/types";
import Image from "next/image";

type Props = {
  sticker: Sticker
}

function StickerCard({ sticker }: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const { currency, exchangeRates } = useGlobalContext()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth < 1024 ?
        <Link className={styles.stickerCardContainerBorder} href={sticker.steam_link}>
          <div className={styles.stickerCardContainer}>
            <div className={styles.stickerCard}>
              <div className={styles.stickerIconContainer}>
                <Image className={styles.stickerIcon} src={sticker.icon} alt={sticker.name + " image"} 
                        width={800} height={600}/>
              </div>
            </div>
            <div className={styles.stickerDetails}>
              <h3 className={styles.stickerTitle}>{sticker.name}</h3>
              <p className={styles.stickerPrice}>
                {getCurrencyString(sticker.average_price, currency, exchangeRates)}
              </p>
            </div>
          </div>
        </Link>
        :
        <div className={styles.stickerCardWide}>
          <h3 className={styles.stickerTitleWide}>{sticker.name}</h3>
          <div className={styles.stickerIconAndInformationContainerWide}>
            <div className={styles.stickerIconContainerWide}>
              <Image className={styles.stickerIconWide} src={sticker.icon} alt={sticker.name + " image"} 
                     width={800} height={600}/>
            </div>
            <div className={styles.stickerPriceWide}>
              <p>{getCurrencyString(sticker.average_price, currency, exchangeRates)}</p>
            </div>
            <div className={styles.steamButtonContainer}>
              <OutlineButton text="BUY ON STEAM" href={sticker.steam_link} fontSize="14px"
                icon={<ShoppingCartIcon style={{ fontSize: "16px" }} />}
                width="100%" />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default StickerCard