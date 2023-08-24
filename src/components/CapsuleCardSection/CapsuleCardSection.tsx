import CapsuleCard from "../CapsuleCard/CapsuleCard";
import styles from "./CapsuleCardSection.module.css";
import getCapsules from "../../app/libs/getCapsules";
import CapsuleInfo from "../../capsules.json";

let cardArr = [{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
},
{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
},
{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
},
{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
},
{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
},
{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
},
{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
},
{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
},
{
    title: "Paris 2023 Legends",
    icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7OPJYzRRvozkx7-HkvDxPb_CqWdQ-sJ0xL2QrI-n0QSx-BJpNWH2II6XIFA6Yl-E_1W_kOi8gp_ovsjOyXE3uyc8pSGK6iapj-s/",
    stickerValue: 70.00,
    capsulePrice: 0.25,
}]

async function CardSection() {
    const capsules = await getCapsules(CapsuleInfo.major_capsules);
    
    return (
        <div className={styles.cardSection}>
            {capsules.map((capsule, index) => (
                <CapsuleCard key={index} title={capsule.title} icon={capsule.icon} stickerValue={75}
                    capsulePrice={capsule.average_price} hoverAnimation detailPage="/detailPage"/>
            ))}
        </div>
    )
}

export default CardSection