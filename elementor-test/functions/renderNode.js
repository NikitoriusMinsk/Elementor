import React from 'react'
import * as ComponentsImport from '../components'

//convert file name keys to lower case (might not need this in the future)
const Components = Object.fromEntries(
    Object.entries(ComponentsImport).map(([key, value]) => [key.toLowerCase(), value])
);

export default function renderNode(node, edit = false){
    if (node !== undefined && Components[node.name]) {
        console.log(edit, node.name)
        return React.createElement(
            Components[node.name], 
            {
                ...node.props,
                edit: edit
            }, 
            node.children && 
                (
                    typeof node.children === 'string' 
                    ? node.children 
                    : node.children.map((child) => renderNode(child, edit))
                )
        )
    }
}