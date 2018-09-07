import P from "prop-types"
import { connect } from "react-redux"

import { ProgramActions } from "../../redux/ducks/Program"
import { withOneInputForm } from "../enhancers"

const AddProgramForm = withOneInputForm({
	label: "Program name:",
	inputName: "name",
	submitHandlerProp: "addProgram",
	errorMessage: "I need a name",
	buttonLabel: "Add"
})

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
