import React from "react"
import styled from "styled-components"
import { withSubmitHandler } from "../enhancers"
import { Input, Button, Form, P } from "../style"

const S = {
	Form: styled(Form)`
		height: 10rem;
	`,
	Select: Input.withComponent(styled.select`
		/* appearance: none;
		cursor: pointer; */
	`)
}
const AddExerciseToProgramForm = withSubmitHandler({
	submitProp: (values, props) =>
		props.addExerciseToProgram({ ...values, id: props.program.id }),
	validationState: { exerciseId: "" },
	validator: {
		exerciseId: value =>
			value !== undefined ? "" : "Every exercice is in the program"
	}
})(
	({ handleSubmit, errors, handleChange, exercisesNotInProgram }) =>
		exercisesNotInProgram.length === 0 ? (
			<P>There is no more exercises left to add !</P>
		) : (
			<S.Form onSubmit={handleSubmit} onChange={handleChange}>
				<S.Select name="exerciseId">
					{exercisesNotInProgram.map(({ name, id }) => (
						<option key={id} value={id}>
							{name}
						</option>
					))}
				</S.Select>
				<Button type="submit" disabled={errors.exerciseId ? true : false}>
					Add exercise
				</Button>
			</S.Form>
		)
)

export default AddExerciseToProgramForm
