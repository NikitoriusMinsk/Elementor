import styles from '../styles/Home.module.css'
import React, { useEffect, useRef, useState } from 'react'
import renderNode from '../functions/renderNode'
import treeToJSON from '../functions/treeToJSON'
import TestRenderer from 'react-test-renderer'

const structure = {
    name: 'wrapper',
    props: {
        key: 'wrapper',
        author: 'hello!'
    },
    children: [
        {
            name: 'header',
            props: {
                key:'header',
            },
            children: [
                {
                    name: 'title',
                    props: {
                        key:'title',
                    },
                    children: [
                        {
                            name: 'text',
                            props: {
                                key:'text1',
                            },
                            children: 'I am a header!'
                        }
                    ]
                }
            ]
        },
        {
            name: 'text',
            props: {
                key:'text2',
            },
            children: 'I am a text!'
        }
    ]
}

export default function Home() {
    const [pageContent, setPageContent] = useState();
    const [pageContent2, setPageContent2] = useState();

    useEffect(() => {
        setPageContent(renderNode(structure))
    },[])

    useEffect(() => {
        const tree = TestRenderer.create(pageContent).toTree();
        const structure2 = tree && treeToJSON(tree);
        tree && setPageContent2(renderNode(structure2));
    }, [pageContent])

    return (
        <div className={styles.container}>
            {pageContent}
            {pageContent2}
        </div>
    )
}
