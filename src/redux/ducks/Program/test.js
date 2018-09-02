import reducer from "./reducers"
import actions from "./actions"

const makeInitialState = ({ byId = {}, allIds = [] } = {}) => ({
	byId,
	allIds
})

describe("Program reducer", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual(makeInitialState())
	})

	test("should add a Program", () => {
		const addProgram = actions.add({
			name: "Classic",
			timing: { perBreak: 50000, perExercise: 50000 }
		})
		const result = reducer(
			makeInitialState({
				byId: {},
				allIds: []
			}),
			addProgram
		)

		expect(result).toEqual({
			byId: { [addProgram.payload.id]: addProgram.payload },
			allIds: [addProgram.payload.id]
		})
	})

	test("should remove a Program", () => {
		const removeProgram = actions.remove({ id: "a" })
		const result = reducer(
			makeInitialState({
				byId: { a: { name: "Classic", id: "a" } },
				allIds: ["a"]
			}),
			removeProgram
		)

		expect(result).toEqual(makeInitialState())
	})

	test("should update a Program", () => {
		const updateProgram = actions.update({ id: "a", name: "Plop" })
		const result = reducer(
			makeInitialState({
				byId: { a: { name: "Classic", id: "a" } },
				allIds: ["a"]
			}),
			updateProgram
		)

		expect(result).toEqual({
			byId: { a: { name: "Plop", id: "a" } },
			allIds: ["a"]
		})
	})

	test("should add an exercise id to a Program", () => {
		const addExerciseToProgram = actions.addExercise({
			id: "a",
			exerciseId: "exo1"
		})
		const result = reducer(
			makeInitialState({
				byId: { a: { name: "Classic", id: "a", exercisesById: [] } },
				allIds: ["a"]
			}),
			addExerciseToProgram
		)

		expect(result).toEqual({
			byId: { a: { name: "Classic", id: "a", exercisesById: ["exo1"] } },
			allIds: ["a"]
		})
	})
})
