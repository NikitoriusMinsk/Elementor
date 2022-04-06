import styles from '../styles/Home.module.css'
import React from 'react'

export default function Wrapper({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}
