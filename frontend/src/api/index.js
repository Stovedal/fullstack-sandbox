import axios from 'axios'
// Config

const api = axios.create({
	baseURL: 'http://localhost:3001/',
});

const paths = {
	todos: "todos/",
	lists: "lists/"
}

// Lists

// Get all lists
const getLists = async () => {
	try {
		const response = await api.get(paths.lists)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

// Add list
const addList = async (name) => {
	try {
		const response = await api.post(paths.lists, { "name": name })
		return response.data
	} catch (error) {
		console.log(error)
	}
}

// Delete list
const deleteList = async (id) => {
	try {
		await api.delete(paths.lists, { params: { "id": id } })
	} catch (error) {
		console.log(error)
	}
}

// Todos

// Get todos by list id
const getTodosByListId = async (listId) => {
	try {
		const response = await api.get(paths.todos, { params: { "list_id": listId } })
		return response.data
	} catch (error) {
		console.log(error)
	}
}
// Add todo
const addTodo = async (todo) => {
	try {
		const response = await api.post(paths.todos, todo)
		return response.data
	} catch (error) {
		console.log(error)
	}
}

// Delete todo
const deleteTodo = async (todoId) => {
	try {
		await api.delete(paths.todos, { params: { "id": todoId } })
	} catch (error) {
		console.log(error)
	}
}

export default {
	getLists,
	addList,
	deleteList,
	getTodosByListId,
	addTodo,
	deleteTodo
}