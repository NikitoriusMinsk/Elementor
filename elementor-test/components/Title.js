import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import findChild from '../functions/findChild'
import renderNode from '../functions/renderNode'
import { PageContext } from '../pages'

export default function Title({ children, edit, uuid }) {
    const context = useContext(PageContext)

    function handleDelete(){
        const {child, parent} = findChild(context.structure.current, uuid)
        parent.children = parent.children.filter(child => child.props.key !== uuid)
        context.setPageContent(renderNode(context.structure.current, true))
    }

    return (
        <h1 className={styles.title}>
            {edit && <div className={styles.edit} onClick={handleDelete}> I am title! </div>}
            {children}
        </h1>
    )
}
