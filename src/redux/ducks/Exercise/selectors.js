import { createSelector } from "reselect"

import { makeGetAll, makeGetById } from "../../selector-utils"
import { ProgramSelectors } from "../Program"

const getAll = makeGetAll("exercises")
const getById = makeGetById("exercises")
const getByIdWithRecords = createSelector(
	getById,
	state => state.records,
	(exercise, records) =>
		exercise
			? {
					...exercise,
					records: exercise.recordsById.map(id => records.byId[id])
			  }
			: undefined
)
const getAllNotInProgram = createSelector(
	ProgramSelectors.getById,
	getAll,
	(program, exercises) =>
		exercises.reduce(
			(acc, e) =>
				program && program.exercisesById.includes(e.id)
					? acc
					: (acc.push(e), acc),
			[]
		)
)
const getAllInProgram = createSelector(
	ProgramSelectors.getById,
	getAll,
	(program, exercises) =>
		exercises.reduce(
			(acc, e) =>
				program && program.exercisesById.includes(e.id)
					? (acc.push(e), acc)
					: acc,
			[]
		)
)

export default {
	getAll,
	getById,
	getAllNotInProgram,
	getAllInProgram,
	getByIdWithRecords
}
