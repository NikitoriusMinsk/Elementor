import styles from '../styles/Home.module.css'
import React from 'react'

export default function Content({ children }) {
    return (
        <div className={styles.content}>{children}</div>
    )
}
