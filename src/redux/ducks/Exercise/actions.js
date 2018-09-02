import types from "./types"
import cuid from "cuid"
const add = ({ name }) => ({
	type: types.ADD,
	payload: {
		id: cuid(),
		name
	}
})

const remove = ({ id }) => ({
	type: types.REMOVE,
	payload: { id }
})

const update = ({ name, id }) => ({
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
