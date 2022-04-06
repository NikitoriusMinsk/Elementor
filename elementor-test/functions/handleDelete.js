import findChild from "./findChild"
import renderNode from "./renderNode"

export function handleDelete(context, uuid){
    const {child, parent} = findChild(context.structure.current, uuid)
    parent.children = parent.children.filter(child => child.props.key !== uuid)
    context.setPageContent(renderNode(context.structure.current, true))
}