import T from "./types"
import { ExerciseTypes } from "../Exercise"
import normalized from "../../normalized"
const ProgramReducer = (
	state = {
		byId: {},
		allIds: []
	},
	{ type, payload }
) => {
	switch (type) {
		case T.ADD:
			return normalized.add(state, payload)

		case T.REMOVE:
			return normalized.remove(state, payload)

		case T.UPDATE:
			return normalized.update(state, payload)
		case T.ADD_EXERCISE:
			return normalized.update(state, payload, ({ exercisesById: e }) => ({
				exercisesById: e.concat(payload.exerciseId)
			}))

		case ExerciseTypes.REMOVE:
			return normalized.updateRefs(state, payload, "programsById", entity => ({
				exercisesById: entity.exercisesById.filter(
					exoId => exoId !== payload.id
				)
			}))

		default:
			return state
	}
}

export default ProgramReducer
