import { makeGetAll, makeGetById } from "../../selector-utils"

export default {
	getAll: makeGetAll("exercises"),
	getById: makeGetById("exercises")
}
