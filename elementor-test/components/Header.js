import styles from '../styles/Home.module.css'
import React from 'react'

export default function Header({ children }) {
    return (
        <header className={styles.header}>{children}</header>
    )
}
