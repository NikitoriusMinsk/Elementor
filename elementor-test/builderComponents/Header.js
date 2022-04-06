import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { PageContext } from '../pages';
import { onDragOver, onDrop } from '../functions/DragAndDrop';
import { handleDelete } from '../functions/handleDelete';

export default function Header({ children, edit, uuid }) {
    const context = useContext(PageContext)

    return (
        <header className={styles.header} onDragOver={onDragOver} onDrop={(e) => onDrop(e, uuid, context)}>
            {
                edit && <div className={styles.edit} > 
                    <span onClick={() => handleDelete(context, uuid)}>Delete</span>
                    <span>Edit</span>    
                </div>
            }
            {children}
        </header>
    )
}
