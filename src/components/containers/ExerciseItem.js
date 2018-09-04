import React from "react"
import P from "prop-types"
import { connect } from "react-redux"
import TimeAgo from "react-timeago"
import { Routes } from "../../constants"
import { withRedirectIfNoProp } from "../enhancers"
import { ExerciseActions, ExerciseSelectors } from "../../redux/ducks/Exercise"

const ExerciseItem = withRedirectIfNoProp({
	prop: "exercise",
	redirect: Routes.exercises.path
})(
	({
		exercise: { programsById, id, name, recordsById, records },
		removeExercise
	}) => {
		const lastRecord = records[records.length - 1]

		return (
			<div>
				<h1>{name}</h1>
				{lastRecord && (
					<p>
						Last record : <TimeAgo date={lastRecord.timestamp} />
					</p>
				)}
				<button
					onClick={() => removeExercise({ id, programsById, recordsById })}
				>
					Remove{" "}
					<span role="img" aria-label="Remove exercise">
						❌
					</span>
				</button>
			</div>
		)
	}
)
ExerciseItem.propTypes = {
	exercise: P.shape({
		id: P.string.isRequired,
		name: P.string.isRequired,
		records: P.arrayOf(P.shape({ repetitions: P.number.isRequired })),
		programsById: P.arrayOf(P.string).isRequired
	}),
	removeExercise: P.func.isRequired
}

const mapStateToProps = (state, { match: { params } }) => ({
	exercise: ExerciseSelectors.getByIdWithRecords(state, params.id)
})

const mapDispatchToProps = dispatch => ({
	removeExercise: p => dispatch(ExerciseActions.remove(p))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExerciseItem)
