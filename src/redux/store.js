import { createStore, combineReducers } from "redux"
import { tryCatchUndef, pipe } from "../utils"
import throttle from "lodash.throttle"
import exercises from "./ducks/Exercise"
import programs from "./ducks/Program"
import records from "./ducks/Record"

const loadState = tryCatchUndef(() => {
	const state = localStorage.getItem("state")
	return state === null ? undefined : JSON.parse(state)
})

const saveState = tryCatchUndef(
	pipe(
		JSON.stringify,
		state => localStorage.setItem("state", state)
	)
)

const configureStore = () => {
	const rootReducer = combineReducers({
		exercises,
		programs,
		records
	})

	const store = createStore(
		rootReducer,
		loadState(),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

	store.subscribe(throttle(() => saveState(store.getState()), 3000))
	return store
}
export default configureStore
