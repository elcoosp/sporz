import React from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { Routes } from "../../constants"
import { withRedirectIfNoProp } from "../enhancers"
import { AddExerciseToProgramForm, TimingForm } from "../dumbs"
import { Section } from "../style"
import { ProgramActions, ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"

const ProgramItem = withRedirectIfNoProp({
	prop: "program",
	redirect: Routes.programs.path
})(
	({
		program,
		removeProgram,
		exercisesNotInProgram,
		exercisesInProgram,
		addExerciseToProgram,
		updateTiming
	}) => (
		<Section>
			<h1>{program.name}</h1>

			<button
				onClick={() =>
					removeProgram({
						id: program.id,
						exercisesById: program.exercisesById
					})
				}
			>
				Remove{" "}
				<span role="img" aria-label="Remove program">
					❌
				</span>
			</button>
			<AddExerciseToProgramForm
				exercisesNotInProgram={exercisesNotInProgram}
				addExerciseToProgram={addExerciseToProgram}
				program={program}
			/>

			<TimingForm timing={program.timing} updateTiming={updateTiming} />
			<h2>In the list !</h2>
			<ul />
			{exercisesInProgram.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</Section>
	)
)

ProgramItem.propTypes = {
	program: P.shape({
		id: P.string.isRequired,
		name: P.string.isRequired
	}),
	removeProgram: P.func.isRequired,
	exercisesNotInProgram: P.arrayOf(P.shape({})).isRequired,
	exercisesInProgram: P.arrayOf(P.shape({})).isRequired
}

const mapStateToProps = (state, { match: { params } }) => ({
	program: ProgramSelectors.getById(state, params.id),
	exercisesNotInProgram: ExerciseSelectors.getAllNotInProgram(state, params.id),
	exercisesInProgram: ExerciseSelectors.getAllInProgram(state, params.id)
})

const mapDispatchToProps = (dispatch, { match }) => ({
	updateTiming: payload =>
		dispatch(ProgramActions.update({ id: match.params.id, ...payload })),
	removeProgram: payload => dispatch(ProgramActions.remove(payload)),
	addExerciseToProgram: payload => dispatch(ProgramActions.addExercise(payload))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgramItem)
