import React from "react"
import P from "prop-types"
import { connect } from "react-redux"
import TimeAgo from "react-timeago"

import { Routes } from "../../constants"
import { withRedirectIfNoProp } from "../enhancers"
import { ExerciseActions, ExerciseSelectors } from "../../redux/ducks/Exercise"

import { H1, Section, Badge, WarningButton, ButtonLink } from "../style"
import { Chart } from "../dumbs"
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
			<Section>
				<H1>{name}</H1>

				<Badge>
					Last record:{" "}
					{lastRecord ? <TimeAgo date={lastRecord.timestamp} /> : "none"}
				</Badge>
				{records.length === 0 ? (
					<ButtonLink to={Routes.programs.path}>
						Go training to see your records chart
					</ButtonLink>
				) : (
					<Chart dataKey="repetitions" data={records} />
				)}
				<WarningButton
					onClick={() => removeExercise({ id, programsById, recordsById })}
				>
					Remove exercise
				</WarningButton>
			</Section>
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
