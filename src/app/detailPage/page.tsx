import NavHead from "@/components/NavHead/NavHead";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import CapsuleInfo from "@/components/CapsuleInfo/CapsuleInfo";
import OutlineButton from "@/components/OutlineButton/OutlineButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Page() {
  return (
    <>
      <NavHead />
      <Card icon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/" />
      <div className={styles.infoContainer}>
        <CapsuleInfo title="Paris 2023 Legends" stickerValue={70} capsulePrice={0.25} />
        {/*Todo: Add hover effect on button and link to steam*/}
        <OutlineButton width="100%" icon={<ShoppingCartIcon style={{fontSize: "14px"}}/>} 
                       text="BUY ON STEAM" fontSize="12px"/>
      </div>
    </>
  )
}

export default Page