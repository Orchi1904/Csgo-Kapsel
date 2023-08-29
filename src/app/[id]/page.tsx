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

type Props = {
  params: {
    id: string
  }
}

async function Page({ params: { id } }: Props) {
  const capsuleData = await getCapsule(id);

  return (
    <>
      <NavHead />
      <CapsuleCard icon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/" />
      <div className={styles.infoContainer}>
        <CapsuleInfo title="Paris 2023 Legends" stickerValue={70} capsulePrice={0.25} />
        <OutlineButton width="100%" icon={<ShoppingCartIcon style={{ fontSize: "14px" }} />}
          text="BUY ON STEAM" fontSize="12px" />
      </div>
      <div className={styles.stickerSectionContainer}>
        <div className={styles.stickerSectionHead}>
          <h4 className={styles.stickerSectionHeadTitle}>Stickers</h4>
          <InputSection id="stickerSort" />
        </div>
        <StickerCardSection />
        <EndLine bgImage="/images/backgrounds/endLineRedBG.svg" />
      </div>
    </>
  )
}

export default Page