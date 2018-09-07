import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import { ProgramSelectors } from "../../redux/ducks/Program"
import { RecordSelectors } from "../../redux/ducks/Record"

import { Section, Card, P as Paragraph, CardList, CheckMark } from "../style"
export class HomeInstructions extends Component {
	static propTypes = {
		hasExercises: P.bool.isRequired,
		hasPrograms: P.bool.isRequired,
		hasRecords: P.bool.isRequired
	}

	render() {
		const { hasExercises, hasPrograms, hasRecords } = this.props
		return (
			<Section>
				<CardList>
					<Card>
						<Paragraph>Create some exercises</Paragraph>
						<CheckMark checked={hasExercises} />
					</Card>

					<Card>
						<Paragraph>Mix them in a program</Paragraph>
						<CheckMark checked={hasPrograms} />
					</Card>
					<Card>
						<Paragraph>Take a training on a program</Paragraph>
						<CheckMark checked={hasRecords} />
					</Card>

					<Card>
						<Paragraph>
							Sporz will keep track of the records you give him during your
							trainings.
							<br />
							<br />
							You can view a chart with your progression for each exercise you
							practiced.
						</Paragraph>
					</Card>
				</CardList>
			</Section>
		)
	}
}

const mapStateToProps = state => ({
	hasExercises: ExerciseSelectors.hasExercises(state),
	hasPrograms: ProgramSelectors.hasPrograms(state),
	hasRecords: RecordSelectors.hasRecords(state)
})

const mapDispatchToProps = {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeInstructions)
