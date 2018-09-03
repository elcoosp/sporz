import T from "./types"
import normalized from "../../normalized"

const RecordReducer = (
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

		default:
			return state
	}
}

export default RecordReducer
