import styles from '../styles/Home.module.css'
import React from 'react'
import {renderNodeWithReact} from '../functions/renderNode'

const structure = {
    name: 'wrapper',
    key: 'wrapper',
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
            name: 'content',
            props: {
                key:'content',
            },
            children: [
                {
                    name: 'text',
                    props: {
                        key:'text2',
                    },
                    children: 'I am a body!'
                },
            ]
        },
        {
            name: 'footer',
            props: {
                key:'footer',
            },
            children: [
                {
                    name: 'text',
                    props: {
                        key:'text3',
                    },
                    children: 'I am a footer!'
                },
            ]
        }
    ]
}

export default function Home() {

    return (
        <div className={styles.container}>
            {renderNodeWithReact(structure)}
        </div>
    )
}
