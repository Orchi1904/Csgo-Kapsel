import Link from "next/link";
import styles from "./OutlineButton.module.css";

type Props = {
  href: string,
  width: string,
  text: string,
  fontSize: string,
  icon: JSX.Element,
}

function OutlineButton({ href, width, text, icon, fontSize }: Props) {
  return (
    <Link className={styles.outlineButton}
      target="_blank"
      href={href}
      style={{ width, fontSize }}>
      <div className={styles.icon}>{icon}</div>
      <p>{text}</p>
    </Link>
  )
}

export default OutlineButton