import reducer from "./reducers"
import actions from "./actions"
import { ProgramActions } from "../Program"

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
					programsById: []
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
					programsById: []
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
					programsById: ["programId"]
				}
			},
			allIds: ["a"]
		})
	})
})
