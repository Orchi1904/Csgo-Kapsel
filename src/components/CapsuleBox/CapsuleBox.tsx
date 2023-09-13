import React from 'react';
import styles from "./CapsuleBox.module.css"

type Props = {
    icon: string,
    alt: string,
}

function CapsuleBox({icon, alt}: Props) {
    return (
        <div className={styles.capsuleBox}>
            <img className={styles.icon} src={icon} alt={alt} />
        </div>
    )
}

export default CapsuleBox