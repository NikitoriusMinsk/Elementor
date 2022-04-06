import findChild from "./findChild";
import renderNode from "./renderNode";
import {v4 as generateUUID} from 'uuid'

export function onDrop(e, uuid, context){
    e.preventDefault();
    e.stopPropagation();
    const key = generateUUID();
    const component = {
        name: e.dataTransfer.getData('component'),
        props: {
            key: key,
            uuid: key
        },
        children: []
    };
    const {child, parent} = findChild(context.structure.current, uuid)
    child.children.push(component);
    context.setPageContent(renderNode(context.structure.current, true));
}

export function onDragOver(e){
    e.preventDefault();
    e.stopPropagation();
}