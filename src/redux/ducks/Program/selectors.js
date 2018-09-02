import { makeGetAll, makeGetById } from "../../selector-utils"

export default {
	getAll: makeGetAll("programs"),
	getById: makeGetById("programs")
}
