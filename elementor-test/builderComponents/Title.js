import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { PageContext } from '../pages'
import { handleDelete } from '../functions/handleDelete'
import ControlButtons from '../components/controlButtons'
import { onDragOver, onDrop } from '../functions/DragAndDrop'

export default function Title({ children, edit, uuid }) {
    const context = useContext(PageContext)

    return (
        <h1 className={styles.title} onDragOver={onDragOver} onDrop={(e) => onDrop(e, uuid, context)}>
            {
                edit && <ControlButtons
                    onDelete={() => handleDelete(context, uuid)}
                />
            }
            {children}
        </h1>
    )
}
