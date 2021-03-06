import React, { Component } from "react"
import P from "prop-types"
import { pipe, prevDefault } from "../../utils"
import { Form, H2, Input, Button, Label } from "../style"
import { ToastContainer, toast } from "react-toastify"

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
		() => {
			toast("Correctly saved your timing configuration.")
			this.props.updateTiming({ timing: this.state })
		}
	)

	handleChange = pipe(
		prevDefault,
		e => {
			const num = parseInt(e.target.value, 10)
			this.setState({ [e.target.name]: isNaN(num) || num < 0 ? "" : num })
		}
	)
	render() {
		const { perBreak, perExercise } = this.state
		return (
			<Form onSubmit={this.handleSubmit}>
				<H2>Configure your timings (in seconds)</H2>
				<Label htmlFor="perBreak">Per break</Label>
				<Input
					type="number"
					min="0"
					value={perBreak}
					onChange={this.handleChange}
					name="perBreak"
				/>
				<Label htmlFor="perExercise">Per exercise</Label>
				<Input
					type="number"
					min="0"
					value={perExercise}
					onChange={this.handleChange}
					name="perExercise"
				/>
				<Button type="submit">Save</Button>
				<ToastContainer />
			</Form>
		)
	}
}

export default TimingForm
