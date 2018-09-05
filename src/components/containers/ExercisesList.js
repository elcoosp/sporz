import React from "react"
import P from "prop-types"
import { connect } from "react-redux"
import { Routes } from "../../constants"

import AddExerciseForm from "./AddExerciseForm"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"
import { Card, CardList, BigLink, Section } from "../style"

const ExercisesList = ({ exercises }) => {
	return (
		<Section>
			<AddExerciseForm />
			<CardList>
				{exercises.map(({ id, name }) => (
					<Card key={id}>
						<BigLink to={Routes.exercises.path + "/" + id}>{name}</BigLink>
					</Card>
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
