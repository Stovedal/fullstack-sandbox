
module.exports = {
	withValue: (sql, values) => {
		const query = {
			text: sql,
			values: []
		}
		if (Array.isArray(values)) {
			values.forEach(value => {
				query.values.push(value)
			})
		} else if (values !== null) {
			query.values.push(values)
		}
		return query
	}
}


