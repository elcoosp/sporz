import cuid from "cuid"

import types from "./types"

const add = ({
	id = cuid(),
	repetitions = 0,
	exerciseId,
	timestamp = Date.now(),
	timing
}) => ({
	type: types.ADD,
	payload: {
		id,
		timing,
		timestamp,
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
