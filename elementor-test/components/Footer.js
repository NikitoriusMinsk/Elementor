import styles from '../styles/Home.module.css'
import React from 'react'

export default function Footer({ children, edit }) {
    return (
        <footer className={styles.footer}>
            {edit && <div className={styles.edit}> I am footer! </div>}
            {children}
        </footer>
    )
}
