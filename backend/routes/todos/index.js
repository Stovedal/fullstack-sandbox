
utilities = require('../../utilities')

module.exports = (app, db_client) => {

	// ToDos

	toDosPath = '/todos'

	toDosQueries = {
		getToDos: "SELECT * FROM public.todos WHERE public.todos.list_id=$1",
		addToDo: "INSERT INTO public.todos(timestamp, text, list_id) VALUES($1, $2, $3) RETURNING *",
		deleteToDo: "DELETE FROM public.todos WHERE id=$1",
		editToDo: "UPDATE public.todos SET text=$2, completed=$3 WHERE id=$1 RETURNING *"
	}

	

	// Get todos by list id
	app.get(toDosPath, (req, res) => {
		
		query = utilities.withValue(toDosQueries.getToDos, req.query.list_id)

		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err)
				return
			}
			res.send(db_res.rows)
		})
	})

	// Add new todo
	app.post(toDosPath, (req, res) => {
		
		query = utilities.withValue(toDosQueries.addToDo, [req.body.timestamp, req.body.text, req.body.list_id] )		

		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err.stack)
				return
			}
			res.send(db_res.rows)
		})
	})

	// Edit todo
	app.put(toDosPath, (req, res) => {
		
		query = utilities.withValue(toDosQueries.editToDo, [req.body.id, req.body.text, req.body.completed])
		
		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err.stack)
				return
			}
			res.send(db_res.rows)
		})
	})

	// Delete todo
	app.delete(toDosPath, (req, res) => {

		query = utilities.withValue(toDosQueries.deleteToDo, req.query.id) 
		
		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err)
				return
			}
			res.send(db_res)
		})
	})

}