import T from "./types"
import normalized from "../../normalized"
import { ExerciseTypes } from "../Exercise"
const RecordReducer = (
	state = {
		byId: {},
		allIds: []
	},
	{ type, payload }
) => {
	switch (type) {
		case ExerciseTypes.REMOVE:
			return {
				...state,
				allIds: state.allIds.filter(id => !payload.recordsById.includes(id)),
				byId: payload.recordsById.reduce((acc, id) => {
					const { [id]: _, ...updatedById } = acc
					return updatedById
				}, state.byId)
			}
		case T.ADD:
			return normalized.add(state, payload)

		case T.REMOVE:
			return normalized.remove(state, payload)

		default:
			return state
	}
}

export default RecordReducer
