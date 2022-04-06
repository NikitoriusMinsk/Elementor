export default function treeToJSON(element){
    if(element && typeof element.type !== 'string'){
        const result = {
            name: element.type.name.toLowerCase(),
            props: { ...element.props },
            children: typeof element.rendered.rendered[0] !== 'string' 
                ? element.rendered.rendered.map(treeToJSON)
                : element.rendered.rendered[0]
        }
        delete result.props.children;
        return result;
    }
}