import cuid from "cuid"

import types from "./types"

const add = ({ repetitions = 0 }) => ({
	type: types.ADD,
	payload: {
		id: cuid(),
		repetitions
	}
})

const remove = ({ id }) => ({
	type: types.REMOVE,
	payload: { id }
})

export default {
	add,
	remove
}
