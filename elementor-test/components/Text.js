import styles from '../styles/Home.module.css'
import React from 'react'

export default function Text({ children, edit }) {
    return (
        <span className={styles.text}>
            {edit && <div className={styles.edit}> I am text! </div>}
            {children}
        </span>
    )
}
