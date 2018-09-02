import React from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ProgramActions, ProgramSelectors } from "../../redux/ducks/Program"

const ProgramsList = ({ programs, removeProgram }) => {
	return (
		<ul>
			{programs.map(({ id, name }) => (
				<li key={id}>
					<h1>
						{name}{" "}
						<span
							role="img"
							aria-label="Remove program"
							onClick={() => removeProgram({ id })}
						>
							❌
						</span>
					</h1>
				</li>
			))}
		</ul>
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

const mapDispatchToProps = dispatch => ({
	removeProgram: e => dispatch(ProgramActions.remove(e))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgramsList)
