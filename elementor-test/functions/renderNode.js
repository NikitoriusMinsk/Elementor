import React from 'react'
import * as ComponentsImport from '../components'
import styles from '../styles/Home.module.css'

//convert file name keys to lower case (might not need this in the future)
const Components = Object.fromEntries(
    Object.entries(ComponentsImport).map(([key, value]) => [key.toLowerCase(), value])
);

export function renderNode(node) {
    switch (node.name) {
        case 'wrapper':
            return <div className={styles.wrapper} key={node.key}>{node.children.map(renderNode)}</div>
        case 'header':
            return <header className={styles.header} key={node.key}>{node.children.map(renderNode)}</header>
        case 'title':
            return <h1 className={styles.title} key={node.key}>{node.children.map(renderNode)}</h1>
        case 'content':
            return <div className={styles.content} key={node.key}>{node.children.map(renderNode)}</div>
        case 'footer': 
            return <footer className={styles.footer} key={node.key}>{node.children.map(renderNode)}</footer>
        case 'text':
            return <p className={styles.text} key={node.key}>{node.text}</p>
        default:
            return null
    }
}

export function renderNodeWithReact(node){
    if (node !== undefined && Components[node.name]) {
        return React.createElement(
            Components[node.name], 
            {
                ...node.props
            }, 
            node.children && 
                (
                    typeof node.children === 'string' 
                    ? node.children 
                    : node.children.map(renderNodeWithReact)
                )
        )
    }
}