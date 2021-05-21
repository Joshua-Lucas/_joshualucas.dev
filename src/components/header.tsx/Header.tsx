import React from 'react'
import Image from 'next/image'
import styles from '../../styles/components/header.module.scss'

function Header() {
    return(
        <>
            <h1 className={styles.title}>This is my portfolio </h1>
            <Image
                src='/images/LUCAS-SPRING-4_websize.jpg'
                alt="Image of me and my family"
                layout="fill"
            />
            {/* Put transparent box with title */}
        </>
    )
}

export  default Header