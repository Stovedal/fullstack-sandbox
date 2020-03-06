const express = require('express')
const cors = require('cors')
const app = express()
const { Client } = require('pg')

const db_client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: 'todos',
	password: 'softov',
	port: 5432,
  })

app.use(cors())

const PORT = 3001
db_client.connect()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/todos', (req, res) => {
	db_client.query('SELECT * FROM lists', (db_err, db_res) => {
		if(db_err){
			res.send(db_err)
		} else {
			res.send(db_res)
		}

	} )
})

app.post('/todos', (req, res) => {
	console.log(req)
	res.send("Thanks")
})

app.get('/lists', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
