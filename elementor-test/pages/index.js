import styles from '../styles/Home.module.css'
import React, { createContext, useEffect, useRef, useState } from 'react'
import renderNode from '../functions/renderNode'
import treeToJSON from '../functions/treeToJSON'
import TestRenderer from 'react-test-renderer'
import {v4 as uuid} from 'uuid'
import * as ComponentsImport from '../builderComponents'

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

export const PageContext = createContext()

export default function Home() {
    const structure = useRef(initialStructure)
    const [pageContent, setPageContent] = useState()
    const [page2, setPage2] = useState()
    const container = <div className={styles.container}> {pageContent} </div>

    function allowDrop(e){
        e.preventDefault();
    }

    function drag(e, component){
        e.dataTransfer.setData('component', component)
    }

    function drop(e){
        e.preventDefault();
        const key = uuid();
        const component = {
            name: e.dataTransfer.getData('component'),
            props: {
                key: key,
                uuid: key
            },
            children: []
        };
        structure.current.children.push(component);
        setPageContent(renderNode(structure.current, true));
    }

    useEffect(() => {
        const tree = TestRenderer.create(container).toTree()
        if (tree.props.children[1]){
            const struct = treeToJSON(tree.rendered[1])
            setPage2(renderNode(struct))
        }
    }, [pageContent])

    useEffect(() => {
        setPageContent(renderNode(structure.current, true))
    }, [])

    return (
        <>
            <div className={styles.pageWrap}>
                <div className={styles.editorWrap}>
                    <PageContext.Provider value={{structure, setPageContent}}>
                        {container}
                    </PageContext.Provider>
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
            <div className={styles.preview}>
                <span>Clent preview:</span>
                {page2}
            </div>
        </>
    )
}
