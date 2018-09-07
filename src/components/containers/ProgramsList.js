import React from "react"
import P from "prop-types"
import { connect } from "react-redux"
import { Routes } from "../../constants"
import { withRouter } from "react-router-dom"
import AddProgramForm from "./AddProgramForm"
import { ProgramSelectors } from "../../redux/ducks/Program"
import {
	CardList,
	H2,
	P as Paragraph,
	ButtonLink,
	Section,
	Card
} from "../style"

const ProgramsList = withRouter(({ history, programs }) => {
	return (
		<Section>
			<AddProgramForm />

			<CardList>
				{programs.map(({ id, name, exercisesById }) => (
					<Card
						cursorPointer
						onClick={() => history.push(Routes.programs.path + "/" + id)}
						key={id}
					>
						<H2>{name}</H2>
						{exercisesById.length > 0 ? (
							<ButtonLink
								onClick={e => e.stopPropagation()}
								to={Routes.programs.path + "/" + id + "/train"}
							>
								Train now
							</ButtonLink>
						) : (
							<Paragraph>Add exercises to train</Paragraph>
						)}
					</Card>
				))}
			</CardList>
		</Section>
	)
})

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
