import React, { Fragment } from "react"
import { ProgramsList, ProgramItem, ProgramTraining } from "../containers"
import { Route } from "react-router-dom"
import { Routes } from "../../constants"

const Programs = () => (
	<Fragment>
		<Route exact path={Routes.programs.path} component={ProgramsList} />
		<Route exact path={`${Routes.programs.path}/:id`} component={ProgramItem} />
		<Route
			path={`${Routes.programs.path}/:id/train`}
			component={ProgramTraining}
		/>
	</Fragment>
)

export default Programs
