import React, { Fragment } from "react"
import { AddExerciseForm, ExercisesList } from "../containers"
const Exercises = () => {
	return (
		<Fragment>
			<AddExerciseForm />
			<ExercisesList />
		</Fragment>
	)
}

export default Exercises
