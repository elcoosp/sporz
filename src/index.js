import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import registerServiceWorker from "./registerServiceWorker"

import App from "./components/App"
import configureStore from "./redux/store"

const store = configureStore()

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)

registerServiceWorker()
