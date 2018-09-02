import { createStore, combineReducers } from "redux"
import exercises from "./ducks/Exercise"
import programs from "./ducks/Program"

const store = createStore(
	combineReducers({
		exercises,
		programs
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
