import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { PageContext } from '../pages';
import { onDragOver, onDrop } from '../functions/DragAndDrop';
import { handleDelete } from '../functions/handleDelete';

export default function Content({ children, edit, uuid }) {
    const context = useContext(PageContext)

    return (
        <div className={styles.content} onDragOver={onDragOver} onDrop={(e) => onDrop(e, uuid, context)}>
            {edit && <div className={styles.edit} onClick={() => handleDelete(context, uuid)}> I am content! </div>}
            {children}
        </div>
    )
}
