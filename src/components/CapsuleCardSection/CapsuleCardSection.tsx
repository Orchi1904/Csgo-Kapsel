import Card from "../CapsuleCard/CapsuleCard";
import styles from "./CapsuleCardSection.module.css";

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

function CardSection() {
    return (
        <div className={styles.cardSection}>
            {cardArr.map((card, index) => (
                <Card key={index} title={card.title} icon={card.icon} stickerValue={card.stickerValue}
                    capsulePrice={card.capsulePrice} hoverAnimation detailPage="/detailPage"/>
            ))}
        </div>
    )
}

export default CardSection