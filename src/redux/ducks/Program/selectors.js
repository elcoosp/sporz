import { makeGetAll, makeGetById } from "../../selector-utils"
const getAll = makeGetAll("programs")
const getById = makeGetById("programs")
export default {
	getAll,
	getById
}
