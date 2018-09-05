import React from "react"
import P from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import { Routes } from "../../constants"
import { withRedirectIfNoProp } from "../enhancers"
import { AddExerciseToProgramForm, TimingForm } from "../dumbs"
import { Section } from "../style"
import { ProgramActions, ProgramSelectors } from "../../redux/ducks/Program"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import { H1, Button, H2, Badge } from "../style"

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

S.ListContainer = styled.div``

S.List = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
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
				<AddExerciseToProgramForm
					exercisesNotInProgram={exercisesNotInProgram}
					addExerciseToProgram={addExerciseToProgram}
					program={program}
				/>

				<S.ListContainer>
					<H2>Currently in the program</H2>
					<S.List>
						{exercisesInProgram.map(({ id, name }) => (
							<Badge key={id}>{name}</Badge>
						))}
					</S.List>
				</S.ListContainer>
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
