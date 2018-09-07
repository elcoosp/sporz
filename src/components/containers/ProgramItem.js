import React from "react"
import P from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"

import { Routes } from "../../constants"
import { ProgramActions, ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"

import { withRedirectIfNoProp } from "../enhancers"
import { TimingForm, BadgeList } from "../dumbs"
import { H1, WarningButton, Section } from "../style"

const S = {}
S.FormListContainer = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`

const ProgramItem = withRedirectIfNoProp({
	prop: "program",
	redirect: Routes.programs.path
})(
	({
		program,
		removeProgram,
		exercisesNotInProgram,
		removeExerciseFromProgram,
		exercisesInProgram,
		addExerciseToProgram,
		updateTiming
	}) => (
		<Section>
			<H1>{program.name}</H1>
			<S.FormListContainer>
				<BadgeList
					title="Click to add an exercise"
					items={exercisesNotInProgram}
					noItems="No exercises to add"
					badgeContentProp="name"
					badgeClickHandler={exercise =>
						addExerciseToProgram({ exerciseId: exercise.id, id: program.id })
					}
				/>

				<BadgeList
					title="Click to remove an exercise"
					items={exercisesInProgram}
					noItems="No exercises to remove"
					badgeContentProp="name"
					badgeClickHandler={exercise =>
						removeExerciseFromProgram({
							exerciseId: exercise.id,
							id: program.id
						})
					}
				/>
			</S.FormListContainer>
			<TimingForm timing={program.timing} updateTiming={updateTiming} />

			<WarningButton
				onClick={() =>
					removeProgram({
						id: program.id,
						exercisesById: program.exercisesById
					})
				}
			>
				Remove program
			</WarningButton>
		</Section>
	)
)

ProgramItem.propTypes = {
	program: P.shape({
		id: P.string.isRequired,
		name: P.string.isRequired
	}),
	removeProgram: P.func.isRequired,
	exercisesNotInProgram: P.arrayOf(P.shape({})).isRequired,
	exercisesInProgram: P.arrayOf(P.shape({})).isRequired
}

const mapStateToProps = (state, { match: { params } }) => ({
	program: ProgramSelectors.getById(state, params.id),
	exercisesNotInProgram: ExerciseSelectors.getAllNotInProgram(state, params.id),
	exercisesInProgram: ExerciseSelectors.getAllInProgram(state, params.id)
})

const mapDispatchToProps = (dispatch, { match }) => ({
	updateTiming: payload =>
		dispatch(ProgramActions.update({ id: match.params.id, ...payload })),
	removeProgram: payload => dispatch(ProgramActions.remove(payload)),
	addExerciseToProgram: payload =>
		dispatch(ProgramActions.addExercise(payload)),
	removeExerciseFromProgram: payload =>
		dispatch(ProgramActions.removeExercise(payload))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgramItem)
