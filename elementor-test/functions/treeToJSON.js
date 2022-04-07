export default function treeToJSON(element){
    if(element && typeof element.type !== 'string' && typeof element !== 'string'){
        const result = {
            name: element.type.name.toLowerCase(),
            props: { ...element.props },
            children: typeof element.rendered.rendered[0] !== 'string' 
                ? element.rendered.rendered.map(treeToJSON)
                : element.rendered.rendered[0]
        }
        delete result.props.children;
        delete result.props.edit;
        //purge children array from "undefined" elements
        //"undefined" elements appear when a non-component node is parsed
        //might need to fix that in the future
        result.children = result.children.filter(x => x !== undefined)
        return result;
    }
}


// why
// const render = TestRenderer.create(container)
//         const tree = render.toTree()
//         render.unmount();
//         if (tree.props.children[1]){
//             const struct = treeToJSON(tree.rendered[1])
//             console.log(renderNode(struct, false))
//             setPreview(renderNode(struct), false)
//         }
// const container = useMemo(() => <div className={styles.container}> {pageContent} </div>, [pageContent])
// const previewContainer = useMemo(() => <div className={styles.container}> {preview} </div>, [preview])