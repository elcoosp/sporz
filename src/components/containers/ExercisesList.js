import React from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ExerciseActions, ExerciseSelectors } from "../../redux/ducks/Exercise"

const ExercisesList = ({ exercices, removeExercise }) => {
	return (
		<ul>
			{exercices.map(({ id, name }) => (
				<li key={id}>
					<h1>
						{name}{" "}
						<span
							role="img"
							aria-label="Remove exercise"
							onClick={() => removeExercise({ id })}
						>
							❌
						</span>
					</h1>
				</li>
			))}
		</ul>
	)
}

ExercisesList.propTypes = {
	exercices: P.arrayOf(
		P.shape({
			id: P.string.isRequired,
			name: P.string.isRequired
		})
	)
}
const mapStateToProps = state => ({
	exercices: ExerciseSelectors.getAll(state)
})
const mapDispatchToProps = dispatch => ({
	removeExercise: e => dispatch(ExerciseActions.remove(e))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExercisesList)
