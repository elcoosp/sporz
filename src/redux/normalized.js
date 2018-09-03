const normalized = {
	add: (state, payload) => ({
		byId: { ...state.byId, [payload.id]: payload },
		allIds: state.allIds.concat(payload.id)
	}),
	remove: (state, { id }) => {
		const { [id]: _, ...byId } = state.byId
		const allIds = state.allIds.filter(x => x !== id)
		return { byId, allIds }
	},
	update: (
		state,
		payload,
		updater = previousPayload => payload,
		// The id to grab from the payload for updating
		idRef = "id",
		// A ref to the previous data
		previousUpdatedData = state.byId[payload[idRef]]
	) => ({
		byId: {
			...state.byId,
			[previousUpdatedData.id]: {
				...previousUpdatedData,
				...updater(previousUpdatedData)
			}
		},
		allIds: state.allIds
	}),
	// Grab a field on the payload corresponding to the id refs of the entity to update.
	// Get every entity concerned and create the updated ones with the updater function
	// And glue together the state
	updateRefs: (state, payload, payloadRefsField, updater) => {
		const update = payload[payloadRefsField].reduce((acc, id) => {
			const entity = state.byId[id]

			acc[id] = {
				...entity,
				...updater(entity)
			}
			return acc
		}, {})

		return { ...state, byId: { ...state.byId, ...update } }
	}
}

export default normalized
