import { makeGetAll, makeGetById, makeHas } from "../../selector-utils"
const getAll = makeGetAll("records")
const getById = makeGetById("records")
const hasTrained = makeHas("records")

export default {
	getAll,
	getById,
	hasTrained
}
