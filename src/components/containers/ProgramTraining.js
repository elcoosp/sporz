import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import { CountDown } from "../enhancers"

const TrainingTypes = {
	CONFIGURING: "CONFIGURING", // Choosing between regular or random exercises order
	ON_BREAK: "ON_BREAK", // Between exercises
	EXERCISING: "EXERCISING", // Doing some workout, finally !
	FINISHED: "FINISHED" // The end. Congrats
}

const TrainingConfiguring = ({ switchScreen }) => (
	<div>
		<h1 onClick={switchScreen}>Let's get started</h1>
	</div>
)
const TrainingFinished = () => (
	<div>
		<h1>The end. Congrats</h1>
	</div>
)

const TrainingExercising = ({ switchScreen, timing: { perExercise } }) => (
	<CountDown start={2} threshold={0} guard={switchScreen}>
		{({ count, pause, resume, isPaused }) => {
			return <h2 onClick={isPaused ? resume : pause}>{count} exercising</h2>
		}}
	</CountDown>
)

const TrainingOnBreak = ({ switchScreen, timing: { perBreak } }) => (
	<CountDown start={perBreak} threshold={0} guard={switchScreen}>
		{({ count, pause, resume, isPaused }) => (
			<h2 onClick={isPaused ? resume : pause}>{count} on break</h2>
		)}
	</CountDown>
)

const Training = {
	[TrainingTypes.CONFIGURING]: TrainingConfiguring,
	[TrainingTypes.EXERCISING]: TrainingExercising,
	[TrainingTypes.ON_BREAK]: TrainingOnBreak,
	[TrainingTypes.FINISHED]: TrainingFinished
}

export class ProgramTraining extends Component {
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

	state = {
		currentScreen: TrainingTypes.CONFIGURING,
		currentExerciseIndex: 0
	}

	switchScreen = () =>
		this.setState(s => {
			// Is there a remaining exercise ?
			const nextExerciseIndex = s.currentExerciseIndex + 1
			const hasNextExercise = nextExerciseIndex <= this.props.exercises.length

			switch (s.currentScreen) {
				case TrainingTypes.CONFIGURING:
					return {
						...s,
						currentScreen: TrainingTypes.EXERCISING
					}
				case TrainingTypes.EXERCISING:
					return hasNextExercise
						? {
								...s,
								currentExerciseIndex: nextExerciseIndex,
								currentScreen: TrainingTypes.ON_BREAK
						  }
						: {
								...s,
								currentScreen: TrainingTypes.FINISHED
						  }
				case TrainingTypes.ON_BREAK:
					return hasNextExercise
						? {
								...s,
								currentScreen: TrainingTypes.EXERCISING
						  }
						: {
								...s,
								currentScreen: TrainingTypes.FINISHED
						  }
				default:
					return null
			}
		})

	render() {
		const { program } = this.props
		const { currentScreen, currentExerciseIndex } = this.state
		const exercise = this.props.exercises[currentExerciseIndex]
		console.log(currentExerciseIndex)

		const Component = Training[currentScreen]
		return (
			<section>
				<h1>{program.name}</h1>
				<Component
					switchScreen={this.switchScreen}
					timing={program.timing}
					exercise={exercise}
				/>
			</section>
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
)(ProgramTraining)
