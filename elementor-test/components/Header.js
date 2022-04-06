import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import { v4 as generateUUID } from 'uuid';
import { PageContext } from '../pages';
import findChild from '../functions/findChild';
import renderNode from '../functions/renderNode';

export default function Header({ children, edit, uuid }) {
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
        const {child, parent} = findChild(context.structure.current, uuid)
        child.children.push(component);
        context.setPageContent(renderNode(context.structure.current, true));
    }

    function handleDelete(){
        const {child, parent} = findChild(context.structure.current, uuid)
        parent.children = parent.children.filter(child => child.props.key !== uuid)
        context.setPageContent(renderNode(context.structure.current, true))
    }

    return (
        <header className={styles.header} onClick={handleDelete} onDragOver={edit && allowDrop} onDrop={edit && drop}>
            {edit && <div className={styles.edit}> I am header! </div>}
            {children}
        </header>
    )
}
