import types from "./types"
import cuid from "cuid"

const add = ({
	name = "",
	exercisesById = [],
	timing = { perBreak: 10000, perExercise: 30000 }
}) => ({
	type: types.ADD,
	payload: {
		id: cuid(),
		name,
		exercisesById,
		timing
	}
})

const remove = ({ id }) => ({
	type: types.REMOVE,
	payload: { id }
})

const update = ({ id, name = "" }) => ({
	type: types.UPDATE,
	payload: { name, id }
})

const addExercise = ({ id = "", exerciseId = "" }) => ({
	type: types.ADD_EXERCISE,
	payload: {
		exerciseId,
		id
	}
})
export default {
	addExercise,
	add,
	remove,
	update
}
