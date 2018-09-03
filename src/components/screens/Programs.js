import React, { Fragment } from "react"
import { ProgramsList, ProgramItem } from "../containers"
import { Route } from "react-router-dom"
import { Routes } from "../../constants"

const Programs = () => (
	<Fragment>
		<Route exact path={Routes.programs.path} component={ProgramsList} />
		<Route path={`${Routes.programs.path}/:id`} component={ProgramItem} />
	</Fragment>
)

export default Programs
