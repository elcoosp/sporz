import React from "react"
import P from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"

import { Routes } from "../../constants"
import { ProgramActions, ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"

import { withRedirectIfNoProp } from "../enhancers"
import { TimingForm, BadgeList } from "../dumbs"
import { H1, Button, P as Paragraph, Section } from "../style"

const S = {
	WarningButton: styled(Button)`
		color: red;
		border: 1px solid red;
	`
}

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
		exercisesInProgram,
		addExerciseToProgram,
		updateTiming
	}) => (
		<Section>
			<H1>{program.name}</H1>
			<S.FormListContainer>
				<BadgeList
					title="Not in the program"
					items={exercisesNotInProgram}
					badgeContentProp="name"
					badgeClickHandler={exercise =>
						addExerciseToProgram({ exerciseId: exercise.id, id: program.id })
					}
				>
					{exercisesNotInProgram.length === 0 && (
						<Paragraph>All exercises are in the program</Paragraph>
					)}
				</BadgeList>

				<BadgeList
					title="Currently in the program"
					items={exercisesInProgram}
					badgeContentProp="name"
					badgeClickHandler={item => console.log(item)}
				/>
			</S.FormListContainer>
			<TimingForm timing={program.timing} updateTiming={updateTiming} />

			<S.WarningButton
				onClick={() =>
					removeProgram({
						id: program.id,
						exercisesById: program.exercisesById
					})
				}
			>
				Remove (warning, we can not go back) !
			</S.WarningButton>
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
	addExerciseToProgram: payload => dispatch(ProgramActions.addExercise(payload))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgramItem)
