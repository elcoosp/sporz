import React, { Fragment } from "react"
import { ProgramsList, ProgramItem, ProgramTrain } from "../containers"
import { Route } from "react-router-dom"
import { Routes } from "../../constants"

const Programs = () => (
	<Fragment>
		<Route exact path={Routes.programs.path} component={ProgramsList} />
		<Route exact path={`${Routes.programs.path}/:id`} component={ProgramItem} />
		<Route
			path={`${Routes.programs.path}/:id/train`}
			component={ProgramTrain}
		/>
	</Fragment>
)

export default Programs
