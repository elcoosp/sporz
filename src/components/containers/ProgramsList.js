import React, { Fragment } from "react"
import P from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Routes } from "../../constants"

import AddProgramForm from "./AddProgramForm"
import { ProgramSelectors } from "../../redux/ducks/Program"

const ProgramsList = ({ programs }) => {
	return (
		<Fragment>
			<AddProgramForm />

			<ul>
				{programs.map(
					({ id, name, exercisesById }) => (
						console.log(exercisesById),
						(
							<li key={id}>
								<h1>
									<Link to={Routes.programs.path + "/" + id}>{name}</Link>
								</h1>
								{exercisesById.length > 0 ? (
									<Link to={Routes.programs.path + "/" + id + "/train"}>
										Train now
									</Link>
								) : (
									<p>Add exercises to train</p>
								)}
							</li>
						)
					)
				)}
			</ul>
		</Fragment>
	)
}

ProgramsList.propTypes = {
	programs: P.arrayOf(
		P.shape({
			id: P.string.isRequired,
			name: P.string.isRequired
		})
	)
}

const mapStateToProps = state => ({
	programs: ProgramSelectors.getAll(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgramsList)
