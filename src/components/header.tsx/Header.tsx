import React from 'react'
import Image from 'next/image'
import styles from '../../styles/components/header.module.scss'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Header() {
  return (
    <div className={styles.component}>
      <div className={styles.heading}>
        <h1 className={styles.title}>
          <span className={styles.preTitle}>A Louisville Based</span>
          FullStack Developer
        </h1>
        <p>Creating intuitive and responsive software with people in mind</p>
      </div>
      <Image
        src="/images/LUCAS-SPRING-3_websize.jpg"
        alt="Image of me and my family"
        layout="fill"
      />
    </div>
  )
}

export default Header
