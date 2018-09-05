import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import Training, { TrainingTypes } from "../dumbs/Training"
import { H1, Section } from "../style"

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
		const previousExercise = this.props.exercises[currentExerciseIndex - 1]

		const Component = Training[currentScreen]
		return (
			<Section>
				<H1>{program.name}</H1>
				<Component
					switchScreen={this.switchScreen}
					timing={program.timing}
					exercise={exercise}
					previousExercise={previousExercise}
				/>
			</Section>
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
