import StickerCard from "../StickerCard/StickerCard";
import styles from "./StickerCardSection.module.css";

//Links from API have to be changed to following state:
//"https://steamcommunity-a.akamaihd.net/REST_DER_URL, so the beginning has to be replaced"
let cardArr = [{
  title: "Sticker | FURIA | Paris 2023",
  icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycVUhmLDtbt6iiLklli6DJd2Qau4y1zNWKlaCmZ-uGlDMHu5Nz072U9NXwi1ax_BFrYG6hOsbLJUyCkcMf/",
  steamLink: "https://steamcommunity.com/market/listings/730/Sticker%20%7C%20FURIA%20%7C%20Paris%202023",
  stickerPrice: 0.03,
},
{
  title: "Sticker | Vitality (Glitter) | Paris 2023",
  icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycRVRgJDtQurOxPwJy7P_JYzpHoou3xNmOzqf1Z-_Qkz4F7sZz3rjF8dinjAXs_UBvZGv3coeVcQI4Ml_Oug_pQ80BpeU/",
  steamLink: "https://steamcommunity.com/market/listings/730/Sticker%20%7C%20Vitality%20%28Glitter%29%20%7C%20Paris%202023",
  stickerPrice: 0.12,
},
{
  title: "Sticker | Bad News Eagles (Holo) | Paris 2023",
  icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycUVNxGgxYurWaJwZy1PaGIWRDuYmwx9PSlKWtNumCkGgHvJYk2u2Vp9Wh3g3h_RBoMG2gdoOcehh-Pw_kKfFgIg/",
  steamLink: "https://steamcommunity.com/market/listings/730/Sticker%20%7C%20Bad%20News%20Eagles%20%28Holo%29%20%7C%20Paris%202023",
  stickerPrice: 0.82,
},
{
  title: "Sticker | Natus Vincere (Gold) | Paris 2023",
  icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycXVxiLDtQubahFAthwfTNP2gVvInhxNOOz6f1ZemCxzgAsJUm37qVpN-s3wyw_EI9Z2j1JIGXIQQgIQaHy41cNE4/",
  steamLink: "https://steamcommunity.com/market/listings/730/Sticker%20%7C%20Natus%20Vincere%20%28Gold%29%20%7C%20Paris%202023",
  stickerPrice: 6.62,
},
{
  title: "Sticker | Natus Vincere (Gold) | Paris 2023",
  icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycXVxiLDtQubahFAthwfTNP2gVvInhxNOOz6f1ZemCxzgAsJUm37qVpN-s3wyw_EI9Z2j1JIGXIQQgIQaHy41cNE4/",
  steamLink: "https://steamcommunity.com/market/listings/730/Sticker%20%7C%20Natus%20Vincere%20%28Gold%29%20%7C%20Paris%202023",
  stickerPrice: 6.62,
},
{
  title: "Sticker | Vitality (Glitter) | Paris 2023",
  icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycRVRgJDtQurOxPwJy7P_JYzpHoou3xNmOzqf1Z-_Qkz4F7sZz3rjF8dinjAXs_UBvZGv3coeVcQI4Ml_Oug_pQ80BpeU/",
  steamLink: "https://steamcommunity.com/market/listings/730/Sticker%20%7C%20Vitality%20%28Glitter%29%20%7C%20Paris%202023",
  stickerPrice: 0.12,
},
{
  title: "Sticker | FURIA | Paris 2023",
  icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycVUhmLDtbt6iiLklli6DJd2Qau4y1zNWKlaCmZ-uGlDMHu5Nz072U9NXwi1ax_BFrYG6hOsbLJUyCkcMf/",
  steamLink: "https://steamcommunity.com/market/listings/730/Sticker%20%7C%20FURIA%20%7C%20Paris%202023",
  stickerPrice: 0.03,
},
{
  title: "Sticker | Bad News Eagles (Holo) | Paris 2023",
  icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycUVNxGgxYurWaJwZy1PaGIWRDuYmwx9PSlKWtNumCkGgHvJYk2u2Vp9Wh3g3h_RBoMG2gdoOcehh-Pw_kKfFgIg/",
  steamLink: "https://steamcommunity.com/market/listings/730/Sticker%20%7C%20Bad%20News%20Eagles%20%28Holo%29%20%7C%20Paris%202023",
  stickerPrice: 0.82,
}]

function StickerCardSection() {
  return (
    <div className={styles.stickerCardSection}>
      <StickerCard title="Sticker | FURIA | Paris 2023" icon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycVUhmLDtbt6iiLklli6DJd2Qau4y1zNWKlaCmZ-uGlDMHu5Nz072U9NXwi1ax_BFrYG6hOsbLJUyCkcMf/" 
      steamLink="https://steamcommunity.com/market/listings/730/Sticker%20%7C%20FURIA%20%7C%20Paris%202023" stickerPrice={0.03} borders={true}/>
      <StickerCard title="Sticker | FURIA | Paris 2023" icon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycVUhmLDtbt6iiLklli6DJd2Qau4y1zNWKlaCmZ-uGlDMHu5Nz072U9NXwi1ax_BFrYG6hOsbLJUyCkcMf/" 
      steamLink="https://steamcommunity.com/market/listings/730/Sticker%20%7C%20FURIA%20%7C%20Paris%202023" stickerPrice={0.03} borders2={true}/>
      <StickerCard title="Sticker | FURIA | Paris 2023" icon="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycVUhmLDtbt6iiLklli6DJd2Qau4y1zNWKlaCmZ-uGlDMHu5Nz072U9NXwi1ax_BFrYG6hOsbLJUyCkcMf/" 
      steamLink="https://steamcommunity.com/market/listings/730/Sticker%20%7C%20FURIA%20%7C%20Paris%202023" stickerPrice={0.03} borders2={true}/>
      
      {cardArr.map((card, index) => (
        <StickerCard key={index} title={card.title} icon={card.icon} steamLink={card.steamLink}
          stickerPrice={card.stickerPrice} />
      ))}
    </div>
  )
}

export default StickerCardSection