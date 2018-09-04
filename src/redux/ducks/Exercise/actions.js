import types from "./types"
import cuid from "cuid"

const add = ({ name = "", programsById = [], recordsById = [] }) => ({
	type: types.ADD,
	payload: {
		id: cuid(),
		name,
		programsById,
		recordsById
	}
})

const remove = ({ id, programsById = [], recordsById }) => ({
	type: types.REMOVE,
	payload: { id, programsById, recordsById }
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
