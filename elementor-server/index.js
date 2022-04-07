const express = require('express')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3030

app.use(cors({origin: '*'}))
app.use(bodyParser.json())

app.get('/pages', (req, res) => {
    console.log(`GET /pages`)
    const pages = fs.readdirSync('./pages')
    res.send(pages)
})

app.get('/page', (req, res) => {
    const { name } = req.query;
    console.log(`GET /page ${name}`)
    const page = fs.readFileSync(`./pages/${name}.json`, 'utf8')
    res.send(page)
})

app.post('/publish', (req, res) => {
    console.log(`POST /publish`)
    const { page, name } = req.body;
    fs.writeFileSync(`./pages/${name}.json`, JSON.stringify(page))
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
