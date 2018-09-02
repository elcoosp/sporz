import React, { Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Routes } from "../constants"
import { Programs, Exercises, Home } from "./screens"
import { Header } from "./dumbs"

const App = () => {
	return (
		<Router>
			<Fragment>
				<Header />
				<Route exact path={Routes.home.path} component={Home} />
				<Route path={Routes.exercises.path} component={Programs} />
				<Route path={Routes.programs.path} component={Exercises} />
			</Fragment>
		</Router>
	)
}

export default App
