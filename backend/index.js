const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = 3001

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/lists', (req, res) => {

})

app.post('/lists', (req, res) => {

})

app.get('/lists', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
