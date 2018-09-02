import { createStore, combineReducers } from "redux"
import { tryCatchUndef, pipe } from "../utils"
import exercises from "./ducks/Exercise"
import programs from "./ducks/Program"

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
		programs
	})

	const store = createStore(
		rootReducer,
		loadState(),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

	store.subscribe(
		pipe(
			store.getState,
			saveState
		)
	)
	return store
}
export default configureStore
