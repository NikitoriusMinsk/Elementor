import styles from '../styles/Home.module.css'
import React from 'react'

export default function Content({ children, edit }) {
    return (
        <div className={styles.content}>
            {edit && <div className={styles.edit}> I am content! </div>}
            {children}
        </div>
    )
}
