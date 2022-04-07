import styles from '../styles/Home.module.css'
import React, { createContext, useEffect, useMemo, useRef, useState } from 'react'
import renderNode from '../functions/renderNode'
import treeToJSON from '../functions/treeToJSON'
import TestRenderer from 'react-test-renderer'
import {v4 as uuid} from 'uuid'
import * as ComponentsImport from '../builderComponents'
import publishPage from '../requests/publishPage'
import getPage from '../requests/getPage'

const Components = Object.fromEntries(
    Object.entries(ComponentsImport).map(([key, value]) => [key.toLowerCase(), value])
);

const wrapperKey= uuid();

const initialStructure = {
    name: 'wrapper',
    props: {
        key: wrapperKey,
        uuid: wrapperKey,
    },
    children: []
}

export const PageContext = createContext()

export default function Home() {
    const structure = useRef(initialStructure)
    const [pageContent, setPageContent] = useState()
    const [preview, setPreview] = useState()

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

    function handlePublish(){
        publishPage(prompt('Page name'), structure.current)
            .then(() => alert('Page published'))
            .catch(() => alert('Error publishing page'))
    }

    async function handleLoad(){
        const page = await getPage(prompt('Page name'))
        if(page){
            structure.current = page
            setPageContent(renderNode(structure.current, true))
            setPreview(renderNode(structure.current, false))
        } else {
            alert('Page not found')
        }
    }

    useEffect(() => {
        setPreview(renderNode(structure.current), false)
    }, [pageContent])

    useEffect(() => {
        setPageContent(renderNode(structure.current, true))
        setPreview(renderNode(structure.current, false))
    }, [])

    return (
        <>
            <div className={styles.pageWrap}>
                <div className={styles.editorWrap}>
                    <PageContext.Provider value={{structure, setPageContent}}>
                        <div className={styles.container}>
                            {pageContent}
                        </div>
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
                    <button onClick={handlePublish}>Publish</button>
                    <button onClick={handleLoad}>Load</button>
                </div>
            </div>
            <div className={styles.preview}>
                <span>Client preview:</span>
                <div className={styles.editorWrap}>
                    {preview}
                </div>
            </div>
        </>
    )
}
