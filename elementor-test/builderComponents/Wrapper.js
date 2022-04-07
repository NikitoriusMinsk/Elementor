import styles from '../styles/Home.module.css'
import React from 'react'

export default function Wrapper({ children, edit }) {

    const styleOptions = {
        border: edit ? '1px solid blue' : 'none',
    }

    return (
        <div className={styles.wrapper} style={styleOptions}>
            {children}
        </div>
    )
}
