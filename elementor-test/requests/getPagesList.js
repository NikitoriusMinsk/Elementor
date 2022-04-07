export default async function getPagesList(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    const response = await fetch(`${process.env.API}/pages`, options)
    if (response.status === 200) {
        const page = await response.json()
        return page
    } else {
        return null
    }
}