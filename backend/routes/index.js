lists = require('./lists')
todos = require('./todos')

module.exports = (app, db_client) => {
	lists(app, db_client)
	todos(app, db_client)
}