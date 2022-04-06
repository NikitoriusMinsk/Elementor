import styles from '../styles/Home.module.css'
import React from 'react'

export default function Header({ children, edit }) {
    return (
        <header className={styles.header}>
            {edit && <div className={styles.edit}> I am header! </div>}
            {children}
        </header>
    )
}
