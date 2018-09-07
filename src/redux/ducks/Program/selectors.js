import { makeGetAll, makeGetById, makeHas } from "../../selector-utils"
const getAll = makeGetAll("programs")
const getById = makeGetById("programs")
const hasPrograms = makeHas("programs")

export default {
	getAll,
	getById,
	hasPrograms
}
