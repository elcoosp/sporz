import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { Routes } from "../../constants"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import { ProgramSelectors } from "../../redux/ducks/Program"
import { RecordSelectors } from "../../redux/ducks/Record"

import {
	Section,
	CardLink,
	H2,
	P as Paragraph,
	CardList,
	CheckMark
} from "../style"
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
					<CardLink to={Routes.exercises.path}>
						<H2>1</H2>
						<Paragraph>Create some exercises</Paragraph>
						<CheckMark checked={hasExercises} />
					</CardLink>

					<CardLink to={Routes.programs.path}>
						<H2>2</H2>
						<Paragraph>Mix them in a program</Paragraph>
						<CheckMark checked={hasPrograms} />
					</CardLink>

					<CardLink to={Routes.programs.path}>
						<H2>3</H2>
						<Paragraph>
							Take a training on a program and add records during breaks
						</Paragraph>
						<CheckMark checked={hasRecords} />
					</CardLink>

					<CardLink to={Routes.exercises.path}>
						<H2>4</H2>
						<Paragraph>
							Sporz will keep track of the records you give it during your
							trainings.
							<br />
							<br />
							You can view a chart with your progression for each exercise you
							practiced.
						</Paragraph>
					</CardLink>
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
