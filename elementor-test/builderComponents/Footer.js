import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { PageContext } from '../pages';
import { onDragOver, onDrop } from '../functions/DragAndDrop';
import { handleDelete } from '../functions/handleDelete';
import ControlButtons from '../components/controlButtons';

export default function Footer({ children, edit, uuid }) {
    const context = useContext(PageContext)

    const styleOptions = {
        border: edit ? '1px solid orange' : 'none',
    }

    return (
        <footer className={styles.footer} style={styleOptions} onDragOver={onDragOver} onDrop={(e) => onDrop(e, uuid, context)}>
            {
                edit && <ControlButtons
                    onDelete={() => handleDelete(context, uuid)}
                />
            }
            {children}
        </footer>
    )
}
