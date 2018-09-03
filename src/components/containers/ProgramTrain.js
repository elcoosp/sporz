import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import { CountDown } from "../dumbs"
import { Transitionner } from "../enhancers"

const Training = {
	CONFIGURING: "CONFIGURING", // Choosing between regular or random exercises order
	PAUSED: "PAUSED", // User as paused during a break or erxercice
	ON_BREAK: "ON_BREAK", // Between exercises
	EXERCISING: "EXERCISING" // Doing some workout, finally !
}

class CountAware extends Component {
	componentWillMount = () => {
		if (this.props.count <= 0) this.props.transition()
	}

	render() {
		return null
	}
}
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
			program: { timing, name },
			exercises
		} = this.props
		console.log({ exercises })

		return (
			<div>
				<h1>Training</h1>
				<Transitionner
					initial={Training.CONFIGURING}
					states={{
						[Training.CONFIGURING]: ({ transition }) => (
							<h1 onClick={() => transition(Training.EXERCISING)}>
								Let's get started
							</h1>
						),
						[Training.EXERCISING]: ({
							transition,
							count: countBeforePause
						}) => (
							<CountDown startCount={countBeforePause || 5}>
								{({ count }) =>
									count <= 0 ? (
										<CountAware
											count={count}
											transition={() => transition(Training.ON_BREAK)}
										/>
									) : (
										<h2 onClick={() => transition(Training.PAUSED, { count })}>
											{count}
										</h2>
									)
								}
							</CountDown>
						),
						[Training.ON_BREAK]: ({ transition, count: countBeforePause }) => (
							<CountDown startCount={countBeforePause || 5}>
								{({ count }) =>
									count <= 0 ? (
										<CountAware
											count={count}
											transition={() => transition(Training.EXERCISING)}
										/>
									) : (
										<h2 onClick={() => transition(Training.PAUSED, { count })}>
											{count}
										</h2>
									)
								}
							</CountDown>
						),
						[Training.PAUSED]: ({ transition, count }) => (
							<h1 onClick={() => transition(Training.EXERCISING, { count })}>
								Paused
							</h1>
						)
					}}
				/>
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
