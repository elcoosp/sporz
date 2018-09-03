import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
export class ProgramTrain extends Component {
	static propTypes = {
		program: P.shape({
			name: P.string.isRequired,
			id: P.string.isRequired,
			timing: P.exact({
				perBreak: P.number.isRequired,
				perExercise: P.number.isRequired
			})
		}),
		exercises: P.arrayOf(
			P.shape({
				id: P.string.isRequired,
				name: P.string.isRequired
			}).isRequired
		)
	}

	render() {
		return <div>Yo trianing</div>
	}
}

const mapStateToProps = (state, { match: { params } }) => ({
	program: ProgramSelectors.getById(state, params.id),
	exercises: ExerciseSelectors.getAllInProgram(state, params.id)
})

const mapDispatchToProps = {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgramTrain)
