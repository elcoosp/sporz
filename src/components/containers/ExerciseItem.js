import React from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { Routes } from "../../constants"
import { withRedirectIfNoProp } from "../enhancers"
import { ExerciseActions, ExerciseSelectors } from "../../redux/ducks/Exercise"

const ExerciseItem = withRedirectIfNoProp({
	prop: "exercise",
	redirect: Routes.exercises.path
})(({ exercise: { programsById, id, name }, removeExercise }) => (
	<div>
		<h1>{name}</h1>

		<button onClick={() => removeExercise({ id, programsById })}>
			Remove{" "}
			<span role="img" aria-label="Remove exercise">
				❌
			</span>
		</button>
	</div>
))

ExerciseItem.propTypes = {
	exercise: P.shape({
		id: P.string.isRequired,
		name: P.string.isRequired,
		programsById: P.arrayOf(P.string).isRequired
	}),
	removeExercise: P.func.isRequired
}

const mapStateToProps = (state, { match: { params } }) => ({
	exercise: ExerciseSelectors.getById(state, params.id)
})

const mapDispatchToProps = dispatch => ({
	removeExercise: p => dispatch(ExerciseActions.remove(p))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExerciseItem)
