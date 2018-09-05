import React, { Fragment } from "react"
import P from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Routes } from "../../constants"

import AddProgramForm from "./AddProgramForm"
import { ProgramSelectors } from "../../redux/ducks/Program"
import { Card, CardList, BigLink, P as Paragraph, ButtonLink } from "../style"

const ProgramsList = ({ programs }) => {
	return (
		<Fragment>
			<AddProgramForm />

			<CardList>
				{programs.map(({ id, name, exercisesById }) => (
					<Card key={id}>
						<BigLink to={Routes.programs.path + "/" + id}>{name}</BigLink>
						{exercisesById.length > 0 ? (
							<ButtonLink to={Routes.programs.path + "/" + id + "/train"}>
								Train now
							</ButtonLink>
						) : (
							<Paragraph>Add exercises to train</Paragraph>
						)}
					</Card>
				))}
			</CardList>
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
