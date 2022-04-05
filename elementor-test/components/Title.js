import styles from '../styles/Home.module.css'
import React from 'react'

export default function Title({ children }) {
    return (
        <h1 className={styles.title}>{children}</h1>
    )
}
