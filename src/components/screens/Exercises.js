import React, { Fragment } from "react"
import { AddExerciseForm, ExercisesList, ExerciseItem } from "../containers"
import { Route } from "react-router-dom"
import { Routes } from "../../constants"

const Exercises = () => (
	<Fragment>
		<AddExerciseForm />
		<Route exact path={Routes.exercises.path} component={ExercisesList} />
		<Route path={`${Routes.exercises.path}/:id`} component={ExerciseItem} />
	</Fragment>
)

export default Exercises
