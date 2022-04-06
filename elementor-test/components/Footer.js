import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { PageContext } from '../pages';
import { onDragOver, onDrop } from '../functions/DragAndDrop';
import { handleDelete } from '../functions/handleDelete';

export default function Footer({ children, edit, uuid }) {
    const context = useContext(PageContext)

    return (
        <footer className={styles.footer} onDragOver={onDragOver} onDrop={(e) => onDrop(e, uuid, context)}>
            {edit && <div className={styles.edit} onClick={() => handleDelete(context, uuid)}> I am footer! </div>}
            {children}
        </footer>
    )
}
