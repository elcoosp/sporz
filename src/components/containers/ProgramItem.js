import React from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { Routes } from "../../constants"
import { withRedirectIfNoProp } from "../enhancers"
import { AddExerciseToProgramForm } from "../dumbs"
import { ProgramActions, ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"

const ProgramItem = withRedirectIfNoProp({
	prop: "program",
	redirect: Routes.programs.path
})(
	({ program, removeProgram, exercisesNotInProgram, addExerciseToProgram }) => (
		<div>
			<h1>{program.name}</h1>

			<button onClick={() => removeProgram({ id: program.id })}>
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
		</div>
	)
)

ProgramItem.propTypes = {
	program: P.shape({
		id: P.string.isRequired,
		name: P.string.isRequired
	}),
	removeProgram: P.func.isRequired
}

const mapStateToProps = (state, { match: { params } }) => ({
	program: ProgramSelectors.getById(state, params.id),
	exercisesNotInProgram: ExerciseSelectors.getAllNotInProgram(state, params.id)
})

const mapDispatchToProps = dispatch => ({
	removeProgram: p => dispatch(ProgramActions.remove(p)),
	addExerciseToProgram: payload => dispatch(ProgramActions.addExercise(payload))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgramItem)
