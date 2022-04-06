import styles from '../styles/Home.module.css'
import React from 'react'

export default function Title({ children, edit }) {
    return (
        <h1 className={styles.title}>
            {edit && <div className={styles.edit}> I am title! </div>}
            {children}
        </h1>
    )
}
