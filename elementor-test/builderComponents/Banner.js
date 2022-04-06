import React, { useContext } from 'react'
import { PageContext } from '../pages'
import { handleDelete } from '../functions/handleDelete'
import ControlButtons from '../components/controlButtons'
import styles from '../styles/Home.module.css'

export default function Banner({src, edit, uuid}) {
    const context = useContext(PageContext)

    return (
        <div className={styles.banner}>
            {
                edit && <ControlButtons
                    onDelete={() => handleDelete(context, uuid)}
                />
            }
            <img 
                src={src ? src : '/images/placeholder.png'}
                alt='image'
                width={300}
            />
        </div>

    )
}
