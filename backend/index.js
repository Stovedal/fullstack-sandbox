const express = require('express')
const cors = require('cors')
const app = express()
const { Client } = require('pg')
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3001

db_client = new Client({
	host: 'localhost',
	database: 'sellpy_todo',
	port: 5432
})

db_client.connect()

routes(app, db_client)

app.listen(PORT, () => console.log(`Sellpy todo app listening on port ${PORT}!`))
