export const makeGetAll = key => state => Object.values(state[key].byId)
export const makeGetAllIds = key => state => state[key].allIds
export const makeGetById = key => (state, id) => state[key].byId[id]
