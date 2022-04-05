import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/header'
import Text from '../components/Text'
import Title from '../components/Title'
import Wrapper from '../components/wrapper'
import styles from '../styles/Home.module.css'

const Components= {
    content: Content,
    footer: Footer,
    header: Header,
    text: Text,
    title: Title,
    wrapper: Wrapper
}

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
    if (node === undefined) return
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