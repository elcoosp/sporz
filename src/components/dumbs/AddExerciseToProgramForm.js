import React from "react"
import { withSubmitHandler } from "../enhancers"

const AddExerciseToProgramForm = withSubmitHandler({
	submitProp: (values, props) =>
		props.addExerciseToProgram({ ...values, id: props.program.id }),
	validationState: { exerciseId: "" },
	validator: {
		exerciseId: value =>
			value !== undefined ? "" : "Every exercice is in the program"
	}
})(({ handleSubmit, errors, handleChange, exercisesNotInProgram }) => (
	<form onSubmit={handleSubmit} onChange={handleChange}>
		<select name="exerciseId">
			{exercisesNotInProgram.map(({ name, id }) => (
				<option key={id} value={id}>
					{name}
				</option>
			))}
		</select>

		<button type="submit" disabled={errors.exerciseId ? true : false}>
			Add exercise
		</button>
		{exercisesNotInProgram.length === 0 && (
			<span>{"Damn, all exercices in a program !"}</span>
		)}
	</form>
))
export default AddExerciseToProgramForm
