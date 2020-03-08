
utilities = require('../../utilities')

module.exports = (app, db_client) => {

	// Todos

	todosPath = '/todos'

	todosQueries = {
		getTodos: "SELECT * FROM public.todos WHERE public.todos.list_id=$1",
		addTodo: "INSERT INTO public.todos(timestamp, text, list_id) VALUES($1, $2, $3) RETURNING *",
		deleteTodo: "DELETE FROM public.todos WHERE id=$1",
		editTodo: "UPDATE public.todos SET text=$2, completed=$3 WHERE id=$1 RETURNING *"
	}

	

	// Get todos by list id
	app.get(todosPath, (req, res) => {
		
		query = utilities.withValue(todosQueries.getTodos, req.query.list_id)

		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err)
				return
			}
			res.send(db_res.rows)
		})
	})

	// Add new todo
	app.post(todosPath, (req, res) => {
		
		query = utilities.withValue(todosQueries.addTodo, [req.body.timestamp, req.body.text, req.body.list_id] )		

		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err.stack)
				return
			}
			res.send(db_res.rows)
		})
	})

	// Edit todo
	app.put(todosPath, (req, res) => {
		
		query = utilities.withValue(todosQueries.editTodo, [req.body.id, req.body.text, req.body.completed])

		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err.stack)
				return
			}
			res.send(db_res.rows)
		})
	})

	// Delete todo
	app.delete(todosPath, (req, res) => {

		query = utilities.withValue(todosQueries.deleteTodo, req.query.id) 

		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err)
				return
			}
			res.send(db_res)
		})
	})

}