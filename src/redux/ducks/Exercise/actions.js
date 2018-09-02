import types from "./types"
import cuid from "cuid"

const add = ({ name = "", programsById = [] }) => ({
	type: types.ADD,
	payload: {
		id: cuid(),
		name,
		programsById
	}
})

const remove = ({ id }) => ({
	type: types.REMOVE,
	payload: { id }
})

const update = ({ name = "", id }) => ({
	type: types.UPDATE,
	payload: {
		name,
		id
	}
})

export default {
	add,
	remove,
	update
}
