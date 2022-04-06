import styles from '../styles/Home.module.css'
import React, { useContext } from 'react'
import findChild from '../functions/findChild'
import { PageContext } from '../pages'
import renderNode from '../functions/renderNode'

export default function Text({ children, edit, uuid }) {
    const context = useContext(PageContext)

    function handleDelete(){
        const {child, parent} = findChild(context.structure.current, uuid)
        parent.children = parent.children.filter(child => child.props.key !== uuid)
        context.setPageContent(renderNode(context.structure.current, true))
    }

    return (
        <span className={styles.text}>
            {edit && <div className={styles.edit} onClick={handleDelete}> I am text! </div>}
            {children}
        </span>
    )
}
