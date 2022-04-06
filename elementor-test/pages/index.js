import styles from '../styles/Home.module.css'
import React, { useEffect, useRef, useState } from 'react'
import renderNode from '../functions/renderNode'
import treeToJSON from '../functions/treeToJSON'
import TestRenderer from 'react-test-renderer'
import {v4 as uuid} from 'uuid'
import * as ComponentsImport from '../components'

const Components = Object.fromEntries(
    Object.entries(ComponentsImport).map(([key, value]) => [key.toLowerCase(), value])
);

const initialStructure = {
    name: 'wrapper',
    props: {
        key: 'wrapper',
    },
    children: []
}

export default function Home() {
    const structure = useRef(initialStructure)
    const [pageContent, setPageContent] = useState();
    const container = <div className={styles.container}> {pageContent} </div>

    function allowDrop(e){
        e.preventDefault();
    }

    function drag(e, component){
        e.dataTransfer.setData('component', component)
    }

    function drop(e){
        e.preventDefault();
        const component = {
            name: e.dataTransfer.getData('component'),
            props: {
                key: uuid(),
            },
            children: []
        };
        structure.current.children.push(component);
        setPageContent(renderNode(structure.current, true));
    }

    // useEffect(() => {
    //     const tree = TestRenderer.create(container).toTree()
    //     if (tree.props.children[1]){
    //         console.log('tree',tree)
    //         console.log('JSON',treeToJSON(tree.rendered[1]))
    //     }
    // }, [pageContent])

    useEffect(() => {
        setPageContent(renderNode(structure.current, true))
    }, [])

    return (
        <div className={styles.pageWrap}>
            <div className={styles.editorWrap}>
            {container}
                <div 
                    className={styles.dragArea}
                    onDragOver={allowDrop} 
                    onDrop={drop}
                />
            </div>
            <div className={styles.sidebar}>
                {
                    Object.keys(Components).map(key => (
                        <span 
                            key={key}
                            className={styles.dragComponent}
                            onDragStart={(e)=>drag(e, key)}
                            draggable
                        >
                            {key}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
