import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import { CountDown } from "../dumbs"
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
		const {
			program: { timing }
		} = this.props
		return (
			<div>
				<h1>Training</h1>
				<CountDown startCount={timing.perExercise}>
					{({ count }) => <h2>{count}</h2>}
				</CountDown>
			</div>
		)
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
