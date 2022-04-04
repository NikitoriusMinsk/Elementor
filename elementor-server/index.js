const express = require('express')
const fs = require('fs')
const app = express()
const port = 3030

let count = 0;

app.get('/pages', (req, res) => {
    const pages = fs.readFileSync('./pages.json')
    console.log(`GET /pages ${count++}`)
    res.send(pages)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
