import styles from '../styles/Home.module.css'
import React from 'react'

export default function Footer({ children }) {
    return (
        <footer className={styles.footer}>{children}</footer>
    )
}
