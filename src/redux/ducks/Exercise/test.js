import reducer from "./reducers"
import actions from "./actions"
import { ProgramActions } from "../Program"
import { RecordActions } from "../Record"

const makeInitialState = ({ byId = {}, allIds = [] } = {}) => ({
	byId,
	allIds
})

describe("Exercise reducer", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual(makeInitialState())
	})

	test("should add an exercise", () => {
		const addExercise = actions.add({ name: "Crunch" })
		const result = reducer(makeInitialState(), addExercise)

		expect(result).toEqual({
			byId: {
				[addExercise.payload.id]: {
					name: "Crunch",
					id: addExercise.payload.id,
					programsById: [],
					recordsById: []
				}
			},
			allIds: [addExercise.payload.id]
		})
	})

	test("should remove an exercise", () => {
		const removeExercise = actions.remove({ id: "b" })
		const result = reducer(
			makeInitialState({
				byId: {
					a: {
						name: "Crunch",
						id: "a"
					},
					b: {
						name: "Push up",
						id: "b"
					}
				},
				allIds: ["a", "b"]
			}),
			removeExercise
		)

		expect(result).toEqual({
			byId: {
				a: {
					name: "Crunch",
					id: "a"
				}
			},
			allIds: ["a"]
		})
	})

	test("should update an exercise", () => {
		const updateExercise = actions.update({ name: "Cobra", id: "a" })
		const initialState = {
			byId: {
				a: {
					name: "Crunch",
					id: "a"
				}
			},
			allIds: ["a"]
		}

		const result = reducer(initialState, updateExercise)

		expect(result).toEqual({
			byId: {
				a: {
					name: "Cobra",
					id: "a"
				}
			},
			allIds: ["a"]
		})
	})

	test("should add a program id in the programs to which an exercise is related", () => {
		const addProgramToExercise = ProgramActions.addExercise({
			id: "programId",
			exerciseId: "a"
		})
		const initialState = {
			byId: {
				a: {
					name: "Crunch",
					id: "a",
					programsById: [],
					recordsById: []
				}
			},
			allIds: ["a"]
		}

		const result = reducer(initialState, addProgramToExercise)

		expect(result).toEqual({
			byId: {
				a: {
					name: "Crunch",
					id: "a",
					programsById: ["programId"],
					recordsById: []
				}
			},
			allIds: ["a"]
		})
	})

	test("should remove a program id (when the entity is removed) from all exercises that are linked to it", () => {
		const removeProgram = ProgramActions.remove({
			id: "prog1",
			exercisesById: ["a", "b"]
		})
		const result = reducer(
			makeInitialState({
				byId: {
					a: {
						name: "crunch",
						id: "a",
						programsById: ["prog1", "prog2"],
						recordsById: []
					},
					b: {
						name: "Other program",
						id: "b",
						programsById: ["prog1"],
						recordsById: []
					}
				},
				allIds: ["a", "b"]
			}),
			removeProgram
		)

		expect(result).toEqual({
			byId: {
				a: {
					name: "crunch",
					id: "a",
					programsById: ["prog2"],
					recordsById: []
				},
				b: { name: "Other program", id: "b", programsById: [], recordsById: [] }
			},
			allIds: ["a", "b"]
		})
	})

	test("should add a record to the recordsById field on the concerned exercise", () => {
		const addRecord = RecordActions.add({
			id: "rec1",
			exerciseId: ["a"]
		})
		const result = reducer(
			makeInitialState({
				byId: {
					a: { name: "crunch", id: "a", programsById: [], recordsById: [] },
					b: {
						name: "Other program",
						id: "b",
						programsById: [],
						recordsById: []
					}
				},
				allIds: ["a", "b"]
			}),
			addRecord
		)
		expect(result).toEqual({
			byId: {
				a: { name: "crunch", id: "a", programsById: [], recordsById: ["rec1"] },
				b: { name: "Other program", id: "b", programsById: [], recordsById: [] }
			},
			allIds: ["a", "b"]
		})
	})
})
