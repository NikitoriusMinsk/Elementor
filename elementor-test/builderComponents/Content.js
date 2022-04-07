import styles from '../styles/Home.module.css'
import React, { useContext, useRef } from 'react'
import { PageContext } from '../pages';
import { onDragOver, onDrop } from '../functions/DragAndDrop';
import { handleDelete } from '../functions/handleDelete';
import ControlButtons from '../components/controlButtons';
import findChild from '../functions/findChild';
import renderNode from '../functions/renderNode';

export default function Content({ children, edit, uuid, direction='column' }) {
    const context = useContext(PageContext)
    const styleOptions = {
        flexDirection: direction,
        border: edit ? '1px solid orange' : 'none',
    }

    function handleEdit(){
        const dir = prompt('Enter direction:');
        if (dir === 'row' || dir === 'column'){
            const {child, parent} = findChild(context.structure.current, uuid)
            child.props.direction = dir;
            context.setPageContent(renderNode(context.structure.current, true))
        }
    }

    return (
        <div className={styles.content} style={styleOptions} onDragOver={onDragOver} onDrop={(e) => onDrop(e, uuid, context)}>
            {
                edit && <ControlButtons 
                    onDelete={() => handleDelete(context, uuid)}
                    onEdit= {handleEdit}
                />
            }
            {children}
        </div>
    )
}
