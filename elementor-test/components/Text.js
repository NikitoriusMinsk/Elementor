import styles from '../styles/Home.module.css'
import React from 'react'

export default function Text({ children }) {
    return (
        <p className={styles.text}>{children}</p>
    )
}
