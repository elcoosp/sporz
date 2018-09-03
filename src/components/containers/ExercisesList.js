import React, { Fragment } from "react"
import P from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Routes } from "../../constants"

import AddExerciseForm from "./AddExerciseForm"
import { ExerciseSelectors } from "../../redux/ducks/Exercise"

const ExercisesList = ({ exercises }) => {
	return (
		<Fragment>
			<AddExerciseForm />
			<ul>
				{exercises.map(({ id, name }) => (
					<li key={id}>
						<h1>
							<Link to={Routes.exercises.path + "/" + id}>{name}</Link>
						</h1>
					</li>
				))}
			</ul>
		</Fragment>
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
