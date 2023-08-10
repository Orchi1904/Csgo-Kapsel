import styles from "./OutlineButton.module.css";

type Props = {
    width: string,
    text: string,
    fontSize: string,
    icon: JSX.Element,
}

function OutlineButton({width, text, icon, fontSize}: Props) {
  return (
    <button className={styles.outlineButton} style={{width, fontSize}}>
        {icon}
        <p>{text}</p>
    </button>
  )
}

export default OutlineButton