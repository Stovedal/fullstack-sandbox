import axios from 'axios'

// Config

const api = axios.create({
	baseURL: 'http://localhost:3001/',
});

const paths = {
	toDos: "todos/",
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
		return false
	}
}

// Add list ( Not used, redundant )
const addList = async (name) => {
	try {
		const response = await api.post(paths.lists, { "name": name })
		return response.data
	} catch (error) {
		console.log(error)
		return false
	}
}

// Delete list ( Not used, redundant )
const deleteList = async (id) => {
	try {
		await api.delete(paths.lists, { params: { "id": id } })
	} catch (error) {
		console.log(error)
		return false
	}
}

// ToDos

// Get toDos by list id
const getToDosByList = async (list) => {
	try {
		const response = await api.get(paths.toDos, { params: { "list_id": list.id } })
		return response.data
	} catch (error) {
		console.log(error)
		return false
	}
}

// Add toDo
const addToDo = async (list) => {
	try {
		const toDo = {
			list_id: list.id,
			text: "",
			timestamp: new Date(Date.now()).toISOString()
		}
		const response = await api.post(paths.toDos, toDo)
		return response.data
	} catch (error) {
		console.log(error)
		return false
	}
}

// Delete toDo
const deleteToDo = async (toDo) => {
	try {
		await api.delete(paths.toDos, { params: { "id": toDo.id } })
		return true
	} catch (error) {
		console.log(error)
		return false
	}
}

// Edit toDo
const editToDo = async (toDo) => {
	try {
		const res =  await api.put(paths.toDos, toDo)		
		return res.data[0]
	} catch (error) {
		console.log(error)
		return false
	}
}

export default {
	getLists,
	addList,
	deleteList,
	getToDosByList,
	addToDo,
	deleteToDo,
	editToDo
}