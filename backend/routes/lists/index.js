utilities = require('../../utilities')

module.exports = (app, db_client) => {

	// LISTS

	listsPath = "/lists"

	listsQueries = {
		getLists: 'SELECT * FROM lists',
		addList: "INSERT INTO public.lists(name) VALUES($1) RETURNING *",
		deleteList: "DELETE FROM public.lists WHERE id=$1"
	}
	
	// Get all lists
	app.get("/lists", (req, res) => {
		
		db_client.query(listsQueries.getLists, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err)
				return
			}
			res.send(db_res.rows)
		})
	})

	// Add new list
	app.post(listsPath, (req, res) => {

		query = utilities.withValue(listsQueries.addList, req.body.name) 

		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err.stack)
				return
			}
			res.send(db_res.rows)
		})
	})

	// Delete list
	app.delete(listsPath, (req, res) => {

		query = utilities.withValue(listsQueries.deleteList, req.query.id) 

		db_client.query(query, (db_err, db_res) => {
			if (db_err) {
				res.send(db_err)
				return
			}
			res.send(db_res)
		})
	})

}


