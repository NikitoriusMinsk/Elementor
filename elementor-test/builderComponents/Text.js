import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { PageContext } from '../pages'
import { handleDelete } from '../functions/handleDelete'
import ControlButtons from '../components/controlButtons'

export default function Text({ children, edit, uuid }) {
    const context = useContext(PageContext)

    return (
        <span className={styles.text}>
            {
                edit && <ControlButtons
                    onDelete={() => handleDelete(context, uuid)}
                />
            }
            {children}
        </span>
    )
}
