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
                   priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
    )
}

export default CapsuleBox