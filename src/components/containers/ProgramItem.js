import React from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { Routes } from "../../constants"
import { withRedirectIfNoProp } from "../enhancers"
import { ProgramActions, ProgramSelectors } from "../../redux/ducks/Program"

const ProgramItem = withRedirectIfNoProp({
	prop: "program",
	redirect: Routes.programs.path
})(({ program, removeProgram }) => (
	<div>
		<h1>{program.name}</h1>

		<button onClick={() => removeProgram({ id: program.id })}>
			Remove{" "}
			<span role="img" aria-label="Remove program">
				❌
			</span>
		</button>
	</div>
))

ProgramItem.propTypes = {
	program: P.shape({
		id: P.string.isRequired,
		name: P.string.isRequired
	}),
	removeProgram: P.func.isRequired
}

const mapStateToProps = (state, { match: { params } }) => ({
	program: ProgramSelectors.getById(state, params.id)
})

const mapDispatchToProps = dispatch => ({
	removeProgram: p => dispatch(ProgramActions.remove(p))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProgramItem)
