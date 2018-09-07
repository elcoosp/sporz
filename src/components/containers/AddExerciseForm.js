import P from "prop-types"
import { connect } from "react-redux"

import { ExerciseActions } from "../../redux/ducks/Exercise"
import { withOneInputForm } from "../enhancers"

const AddExerciseForm = withOneInputForm({
	label: "Exercise name:",
	inputName: "name",
	submitHandlerProp: "addExercise",
	errorMessage: "I need a name",
	buttonLabel: "Add"
})

AddExerciseForm.propTypes = {
	addExercise: P.func.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	addExercise: e => dispatch(ExerciseActions.add(e))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddExerciseForm)
