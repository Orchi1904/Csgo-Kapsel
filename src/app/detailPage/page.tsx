import NavHead from "@/components/NavHead/NavHead";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import CapsuleInfo from "@/components/CapsuleInfo/CapsuleInfo";

function page() {
  return (
    <>
      <NavHead/>
      <Card icon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/"/>
      <CapsuleInfo title="Paris 2023 Legends" stickerValue={70} capsulePrice={0.25}/>
    </>
  )
}

export default page