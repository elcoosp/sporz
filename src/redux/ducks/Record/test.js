import reducer from "./reducers"
import actions from "./actions"
import { ExerciseActions } from "../Exercise"
const makeInitialState = ({ byId = {}, allIds = [] } = {}) => ({
	byId,
	allIds
})

describe("Record reducer", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual(makeInitialState())
	})

	test("should add a Record", () => {
		const addRecord = actions.add({
			repetitions: 10
		})
		const result = reducer(
			makeInitialState({
				byId: {
					a: {
						repetitions: 80,
						id: "a"
					}
				},
				allIds: ["a"]
			}),
			addRecord
		)

		expect(result).toEqual({
			byId: {
				[addRecord.payload.id]: {
					repetitions: 10,
					id: addRecord.payload.id,
					timestamp: addRecord.payload.timestamp
				},

				a: {
					repetitions: 80,
					id: "a"
				}
			},
			allIds: ["a", addRecord.payload.id]
		})
	})

	test("should remove a Record", () => {
		const removeRecord = actions.remove({ id: "a" })
		const result = reducer(
			makeInitialState({
				byId: {
					a: {
						repetitions: 80,
						id: "a"
					}
				},
				allIds: ["a"]
			}),
			removeRecord
		)

		expect(result).toEqual({
			byId: {},
			allIds: []
		})
	})

	test("should remove corresponding records when an exercise is removed", () => {
		const removeExercise = ExerciseActions.remove({
			id: "exo1",
			recordsById: ["a"]
		})
		const result = reducer(
			makeInitialState({
				byId: {
					a: { repetitions: 1, id: "a", exerciceId: "exo1" },
					b: { repetitions: 2, id: "b", exerciceId: "exo2" }
				},
				allIds: ["a", "b"]
			}),
			removeExercise
		)

		expect(result).toEqual({
			byId: {
				b: { repetitions: 2, id: "b", exerciceId: "exo2" }
			},
			allIds: ["b"]
		})
	})
})
