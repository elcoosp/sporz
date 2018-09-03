import React from "react"
import { formFromEvent, prevDefault, pipe } from "../../utils"
const AddExerciseToProgramForm = ({
	exercisesNotInProgram,
	addExerciseToProgram,
	program
}) => {
	return (
		<form
			onSubmit={pipe(
				prevDefault,
				e => addExerciseToProgram({ ...formFromEvent(e), id: program.id })
			)}
		>
			<select name="exerciseId">
				{exercisesNotInProgram.map(({ name, id }) => (
					<option key={id} value={id}>
						{name}
					</option>
				))}
			</select>

			<button type="submit">Add exercise</button>
		</form>
	)
}

export default AddExerciseToProgramForm
