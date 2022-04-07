import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { PageContext } from '../pages'
import { handleDelete } from '../functions/handleDelete'
import ControlButtons from '../components/controlButtons'
import renderNode from '../functions/renderNode'
import findChild from '../functions/findChild'

export default function Text({ edit, uuid, text }) {
    const context = useContext(PageContext)

    const styleOptions = {
        border: edit ? '1px solid orange' : 'none',
    }

    function handleEdit(){
        const text = prompt('Input text');
        if (text){
            const {child, parent} = findChild(context.structure.current, uuid)
            child.props.text = text;
            context.setPageContent(renderNode(context.structure.current, true))
        }
    }

    return (
        <span className={styles.text} style={styleOptions}>
            {
                edit && <ControlButtons
                    onDelete={() => handleDelete(context, uuid)}
                    onEdit={handleEdit}
                />
            }
            {text}
        </span>
    )
}
