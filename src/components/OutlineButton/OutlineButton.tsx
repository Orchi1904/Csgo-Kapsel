import Link from "next/link";
import styles from "./OutlineButton.module.css";

type Props = {
    width: string,
    text: string,
    fontSize: string,
    icon: JSX.Element,
}

function OutlineButton({width, text, icon, fontSize}: Props) {
  return (
    <Link className={styles.outlineButton} 
          target="_blank"
          href="https://steamcommunity.com/market/listings/730/Paris%202023%20Legends%20Sticker%20Capsule" 
          style={{width, fontSize}}>
        <div className={styles.icon}>{icon}</div>
        <p>{text}</p>
    </Link>
  )
}

export default OutlineButton