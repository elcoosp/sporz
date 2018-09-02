import React, { Fragment } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { ExerciseActions } from "../../redux/ducks/Exercise"
import { withSubmitHandler } from "../enhancers"

const AddExerciseForm = withSubmitHandler({ submitProp: "addExercise" })(() => (
	<Fragment>
		<label htmlFor="name">Name</label>
		<input type="text" name="name" />
		<button type="submit">Add</button>
	</Fragment>
))

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
