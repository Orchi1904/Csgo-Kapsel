import React from 'react';
import styles from "./CapsuleBox.module.css"
import Image from 'next/image';

type Props = {
    icon: string,
    alt: string,
}

function CapsuleBox({icon, alt}: Props) {
    return (
        <div className={styles.capsuleBox}>
            <Image className={styles.icon} src={icon} alt={alt} width={800} height={600}
                   priority={true}/>
        </div>
    )
}

export default CapsuleBox