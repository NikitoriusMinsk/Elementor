export default async function publishPage(name, structure){
    const body = {
        page: structure,
        name: name
    }    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    }
    const response = await fetch(`${process.env.API}/publish`, options)
    if(response.status === 200){
        return response
    }else{
        return null
    }

}