import styles from '../styles/Home.module.css'
import React from 'react'
import renderNode from '../functions/renderNode'

const structure = {
    name: 'wrapper',
    key: 'wrapper',
    children: [
        {
            name: 'header',
            key: 'header',
            children: [
                {
                    name: 'title',
                    key: 'title',
                    children: [
                        {
                            name: 'text',
                            key: 'text1',
                            text: 'I am a header!'
                        }
                    ]
                }
            ]
        },
        {
            name: 'content',
            children: [
                {
                    name: 'text',
                    key: 'text2',
                    text: 'I am a body!'
                },
            ]
        },
        {
            name: 'footer',
            children: [
                {
                    name: 'text',
                    key: 'text3',
                    text: 'I am a footer!'
                },
            ]
        }
    ]
}

export default function Home() {

    return (
        <div className={styles.container}>
            {renderNode(structure)}
        </div>
    )
}
