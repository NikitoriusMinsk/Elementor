import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { v4 as generateUUID } from 'uuid';
import { PageContext } from '../pages';
import findChild from '../functions/findChild';
import renderNode from '../functions/renderNode';

export default function Content({ children, edit, uuid }) {
    const context = useContext(PageContext)
    
    function allowDrop(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function drop(e){
        e.preventDefault();
        e.stopPropagation();
        const key = generateUUID();
        const component = {
            name: e.dataTransfer.getData('component'),
            props: {
                key: key,
                uuid: key
            },
            children: []
        };
        findChild(context.structure.current, uuid).children.push(component);
        context.setPageContent(renderNode(context.structure.current, true));
    }

    return (
        <div className={styles.content} onDragOver={edit && allowDrop} onDrop={edit && drop}>
            {edit && <div className={styles.edit}> I am content! </div>}
            {children}
        </div>
    )
}
