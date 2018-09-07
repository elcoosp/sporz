import { makeGetAll, makeGetById, makeHas } from "../../selector-utils"
const getAll = makeGetAll("records")
const getById = makeGetById("records")
const hasRecords = makeHas("records")

export default {
	getAll,
	getById,
	hasRecords
}
