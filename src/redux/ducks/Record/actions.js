import cuid from "cuid"

import types from "./types"

const add = ({ repetitions = 0, exerciseId }) => ({
	type: types.ADD,
	payload: {
		id: cuid(),
		repetitions,
		exerciseId
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
