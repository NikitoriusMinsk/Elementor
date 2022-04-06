export default function findChild(component, uuid){
    if(component.props.key === uuid){
        return component
    }else{
        for(let i = 0; i < component.children.length; i++){
            const child = findChild(component.children[i], uuid)
            if(child){
                return child
            }
        }
    }
}