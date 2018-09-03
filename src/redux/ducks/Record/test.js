import reducer from "./reducers"
import actions from "./actions"

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
					id: addRecord.payload.id
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
})
