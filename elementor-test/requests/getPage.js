export default async function getPage(name){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    const response = await fetch(`${process.env.API}/page?name=${name}`, options)
    if (response.status === 200) {
        const page = await response.json()
        return page
    } else {
        return null
    }
}