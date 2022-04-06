export default function findChild(component, uuid, parent) {
    if(component.props.key === uuid){
        return {child: component, parent}
    }else{
        for(let i = 0; i < component.children.length; i++){
            const child = findChild(component.children[i], uuid, component)
            if(child){
                return child
            }
        }
    }
}