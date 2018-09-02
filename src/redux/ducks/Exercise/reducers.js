// import { combineReducers } from "redux"
import T from "./types"
import normalized from "../../normalized"
const ExerciseReducer = (
	state = {
		byId: {},
		allIds: []
	},
	{ type, payload } = {}
) => {
	switch (type) {
		case T.ADD:
			return normalized.add(state, payload)

		case T.REMOVE:
			return normalized.remove(state, payload)

		case T.UPDATE:
			return normalized.update(state, payload)

		default:
			return state
	}
}

export default ExerciseReducer
