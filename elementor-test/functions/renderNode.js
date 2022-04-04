import styles from '../styles/Home.module.css'

export default function renderNode(node) {
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