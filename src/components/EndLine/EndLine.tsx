import styles from "./EndLine.module.css";

type Props = {
    bgImage: string
}

function EndLine({bgImage}: Props) {
    return (
        <div className={styles.endLine} style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover"}}/>
    )
}

export default EndLine