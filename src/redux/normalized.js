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
	update: (state, payload) => ({
		byId: {
			...state.byId,
			[payload.id]: { ...state.byId[payload.id], ...payload }
		},
		allIds: state.allIds
	})
}

export default normalized
