import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"

import { pipe, prevDefault, formFromEvent } from "../../utils"
import { ExerciseActions } from "../../redux/ducks/Exercise"

export class AddExerciseForm extends Component {
	static propTypes = {
		addExercise: P.func.isRequired
	}

	handleSubmit = pipe(
		prevDefault,
		formFromEvent,
		this.props.addExercise
	)

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" />
				<button type="Sudmit">Add</button>
			</form>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	addExercise: e => dispatch(ExerciseActions.add(e))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddExerciseForm)
