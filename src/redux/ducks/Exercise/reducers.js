import T from "./types"
import { ProgramTypes } from "../Program"
import normalized from "../../normalized"
const ExerciseReducer = (
	state = {
		byId: {},
		allIds: []
	},
	{ type, payload } = {}
) => {
	switch (type) {
		case ProgramTypes.ADD_EXERCISE:
			return normalized.update(
				state,
				payload,
				({ programsById: p }) => ({
					programsById: p.concat(payload.id)
				}),
				"exerciseId"
			)
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
