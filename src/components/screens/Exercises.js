import React, { Fragment } from "react"
import { ExercisesList, ExerciseItem } from "../containers"
import { Route } from "react-router-dom"
import { Routes } from "../../constants"

const Exercises = () => (
	<Fragment>
		<Route exact path={Routes.exercises.path} component={ExercisesList} />
		<Route
			exact
			path={`${Routes.exercises.path}/:id`}
			component={ExerciseItem}
		/>
	</Fragment>
)

export default Exercises
