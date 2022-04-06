import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { PageContext } from '../pages'
import { handleDelete } from '../functions/handleDelete'

export default function Text({ children, edit, uuid }) {
    const context = useContext(PageContext)

    return (
        <span className={styles.text}>
            {
                edit && <div className={styles.edit} > 
                    <span onClick={() => handleDelete(context, uuid)}>Delete</span>
                    <span>Edit</span>    
                </div>
            }
            {children}
        </span>
    )
}
