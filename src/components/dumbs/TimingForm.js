import React, { Component } from "react"
import P from "prop-types"
import { pipe, prevDefault } from "../../utils"
class TimingForm extends Component {
	static propTypes = {
		timing: P.shape({
			perBreak: P.number.isRequired,
			perExercise: P.number.isRequired
		}).isRequired,
		updateTiming: P.func.isRequired
	}
	state = {
		perBreak: this.props.timing.perBreak,
		perExercise: this.props.timing.perExercise
	}

	handleSubmit = pipe(
		prevDefault,
		() => this.props.updateTiming({ timing: this.state })
	)

	handleChange = pipe(
		prevDefault,
		e => this.setState({ [e.target.name]: parseInt(e.target.value, 10) })
	)
	render() {
		const { perBreak, perExercise } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Configure your timings for this program</h2>
				<label htmlFor="perBreak">Per break</label>
				<input
					type="number"
					min="0"
					value={perBreak}
					onChange={this.handleChange}
					name="perBreak"
				/>
				<label htmlFor="perExercise">Per exercise</label>
				<input
					type="number"
					min="0"
					value={perExercise}
					onChange={this.handleChange}
					name="perExercise"
				/>
				<button type="submit">Save</button>
			</form>
		)
	}
}

export default TimingForm
