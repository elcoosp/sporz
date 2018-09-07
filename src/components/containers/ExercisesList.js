import React from "react"
import P from "prop-types"
import { connect } from "react-redux"
import { Routes } from "../../constants"

import AddExerciseForm from "./AddExerciseForm"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import { CardList, H2, Section, CardLink } from "../style"

const ExercisesList = ({ exercises }) => {
	return (
		<Section>
			<AddExerciseForm />
			<CardList>
				{exercises.map(({ id, name }) => (
					<CardLink key={id} to={Routes.exercises.path + "/" + id}>
						<H2>{name}</H2>
					</CardLink>
				))}
			</CardList>
		</Section>
	)
}

ExercisesList.propTypes = {
	exercises: P.arrayOf(
		P.shape({
			id: P.string.isRequired,
			name: P.string.isRequired
		})
	)
}

const mapStateToProps = state => ({
	exercises: ExerciseSelectors.getAll(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExercisesList)
