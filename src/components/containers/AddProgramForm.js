import React, { Fragment } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ProgramActions } from "../../redux/ducks/Program"
import { withSubmitHandler } from "../enhancers"

const AddProgramForm = withSubmitHandler({ submitProp: "addProgram" })(() => (
	<Fragment>
		<label htmlFor="name">Name</label>
		<input type="text" name="name" />
		<button type="submit">Add</button>
	</Fragment>
))

AddProgramForm.propTypes = {
	addProgram: P.func.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	addProgram: e => dispatch(ProgramActions.add(e))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddProgramForm)
