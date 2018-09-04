import T from "./types"
import { ProgramTypes } from "../Program"
import { RecordTypes } from "../Record"

import normalized from "../../normalized"
const ExerciseReducer = (
	state = {
		byId: {},
		allIds: []
	},
	{ type, payload } = {}
) => {
	switch (type) {
		case RecordTypes.ADD:
			return normalized.update(
				state,
				payload,
				({ recordsById: r }) => ({
					recordsById: r.concat(payload.id)
				}),
				"exerciseId"
			)
		case ProgramTypes.ADD_EXERCISE:
			return normalized.update(
				state,
				payload,
				({ programsById: p }) => ({
					programsById: p.concat(payload.id)
				}),
				"exerciseId"
			)
		case ProgramTypes.REMOVE:
			return normalized.removeRefs(
				state,
				payload,
				"exercisesById",
				"programsById"
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
