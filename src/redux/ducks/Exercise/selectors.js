const getAllByKey = key => state => Object.values(state[key].byId)
const getExerciseById = state => state

export default {
	getAll: getAllByKey("exercises"),
	getExerciseById
}
