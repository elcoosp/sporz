import React, { Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Routes } from "../constants"
import theme from "../theme"
import { Programs, Exercises, Home } from "./screens"
import { Header } from "./dumbs"

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Fragment>
					<Header />
					<Route exact path={Routes.home.path} component={Home} />
					<Route path={Routes.exercises.path} component={Exercises} />
					<Route path={Routes.programs.path} component={Programs} />
				</Fragment>
			</Router>
		</ThemeProvider>
	)
}

export default App
