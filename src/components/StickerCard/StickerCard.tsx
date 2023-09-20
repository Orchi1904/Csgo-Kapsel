"use client"

import Link from "next/link";
import styles from "./StickerCard.module.css";
import { useEffect, useState } from "react";
import OutlineButton from "../OutlineButton/OutlineButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type Props = {
  title: string,
  icon: string,
  steamLink: string,
  stickerPrice: number | "N/A",
}

function StickerCard({ title, icon, steamLink, stickerPrice }: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

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
        <Link className={styles.stickerCardContainerBorder} href={steamLink}>
          <div className={styles.stickerCardContainer}>
            <div className={styles.stickerCard}>
              <div className={styles.stickerIconContainer}>
                <img className={styles.stickerIcon} src={icon} alt={title + " image"} />
              </div>
            </div>
            <div className={styles.stickerDetails}>
              <h3 className={styles.stickerTitle}>{title}</h3>
              <p className={styles.stickerPrice}>
                {stickerPrice.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}
              </p>
            </div>
          </div>
        </Link>
        :
        <div className={styles.stickerCardWide}>
          <h3 className={styles.stickerTitleWide}>{title}</h3>
          <div className={styles.stickerIconAndInformationContainerWide}>
            <div className={styles.stickerIconContainerWide}>
              <img className={styles.stickerIconWide} src={icon} alt={title + " image"} />
            </div>
            <div className={styles.stickerPriceWide}>
              <p>{stickerPrice.toLocaleString("de-DE", { style: "currency", currency: "EUR" }).replace(",", ".")}</p>
            </div>
            <div className={styles.steamButtonContainer}>
              <OutlineButton text="BUY ON STEAM" href={steamLink} fontSize="14px"
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