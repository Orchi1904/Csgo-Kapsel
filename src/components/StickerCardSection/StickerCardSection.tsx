import StickerCard from "../StickerCard/StickerCard";
import styles from "./StickerCardSection.module.css";

let cardArr = [{
  title: "Sticker | FURIA | Paris 2023",
  icon: "http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycVUhmLDtbt6iiLklli6DJd2Qau4y1zNWKlaCmZ-uGlDMHu5Nz072U9NXwi1ax_BFrYG6hOsbLJUyCkcMf/",
  stickerPrice: 0.03,
},
{
  title: "Sticker | Vitality (Glitter) | Paris 2023",
  icon: "http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycRVRgJDtQurOxPwJy7P_JYzpHoou3xNmOzqf1Z-_Qkz4F7sZz3rjF8dinjAXs_UBvZGv3coeVcQI4Ml_Oug_pQ80BpeU/",
  stickerPrice: 0.12,
},
{
  title: "Sticker | Bad News Eagles (Holo) | Paris 2023",
  icon: "http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycUVNxGgxYurWaJwZy1PaGIWRDuYmwx9PSlKWtNumCkGgHvJYk2u2Vp9Wh3g3h_RBoMG2gdoOcehh-Pw_kKfFgIg/",
  stickerPrice: 0.82,
},
{
  title: "Sticker | Natus Vincere (Gold) | Paris 2023",
  icon: "http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycXVxiLDtQubahFAthwfTNP2gVvInhxNOOz6f1ZemCxzgAsJUm37qVpN-s3wyw_EI9Z2j1JIGXIQQgIQaHy41cNE4/",
  stickerPrice: 6.62,
},
{
  title: "Sticker | Natus Vincere (Gold) | Paris 2023",
  icon: "http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycXVxiLDtQubahFAthwfTNP2gVvInhxNOOz6f1ZemCxzgAsJUm37qVpN-s3wyw_EI9Z2j1JIGXIQQgIQaHy41cNE4/",
  stickerPrice: 6.62,
},
{
  title: "Sticker | Vitality (Glitter) | Paris 2023",
  icon: "http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycRVRgJDtQurOxPwJy7P_JYzpHoou3xNmOzqf1Z-_Qkz4F7sZz3rjF8dinjAXs_UBvZGv3coeVcQI4Ml_Oug_pQ80BpeU/",
  stickerPrice: 0.12,
},
{
  title: "Sticker | FURIA | Paris 2023",
  icon: "http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycVUhmLDtbt6iiLklli6DJd2Qau4y1zNWKlaCmZ-uGlDMHu5Nz072U9NXwi1ax_BFrYG6hOsbLJUyCkcMf/",
  stickerPrice: 0.03,
},
{
  title: "Sticker | Bad News Eagles (Holo) | Paris 2023",
  icon: "http://cdn.steamcommunity.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRNTV7ZVLb9hZycUVNxGgxYurWaJwZy1PaGIWRDuYmwx9PSlKWtNumCkGgHvJYk2u2Vp9Wh3g3h_RBoMG2gdoOcehh-Pw_kKfFgIg/",
  stickerPrice: 0.82,
}]

function StickerCardSection() {
  return (
    <div className={styles.stickerCardSection}>
       {cardArr.map((card, index) => (
        <StickerCard key={index} title={card.title} icon={card.icon} stickerPrice={card.stickerPrice}/>
       ))}
    </div>
  )
}

export default StickerCardSection