import React, { Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Routes } from "../constants"
import theme from "../global-style/theme"
import { Programs, Exercises, Home } from "./screens"
import { Header } from "./dumbs"
import injectGlobalStyles from "../global-style"
import styled from "styled-components"
injectGlobalStyles()

const S = {
	Main: styled.main`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`
}

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Fragment>
					<Header />
					<S.Main>
						<Route exact path={Routes.home.path} component={Home} />
						<Route path={Routes.exercises.path} component={Exercises} />
						<Route path={Routes.programs.path} component={Programs} />
					</S.Main>
				</Fragment>
			</Router>
		</ThemeProvider>
	)
}

export default App
