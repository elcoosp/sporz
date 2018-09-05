import types from "./types"
import cuid from "cuid"

const add = ({
	name = "",
	exercisesById = [],
	timing = { perBreak: 10, perExercise: 30 }
}) => ({
	type: types.ADD,
	payload: {
		id: cuid(),
		name,
		exercisesById,
		timing
	}
})

const remove = ({ id, exercisesById = [] }) => ({
	type: types.REMOVE,
	payload: { id, exercisesById }
})

const update = ({ id, ...update }) => ({
	type: types.UPDATE,
	payload: { id, ...update }
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
