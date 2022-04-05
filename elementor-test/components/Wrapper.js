import styles from '../styles/Home.module.css'
import React from 'react'

export default function Wrapper({ children, author }) {
    return (
        <div className={styles.wrapper}>{children}</div>
    )
}
