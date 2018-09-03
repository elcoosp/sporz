import React from "react"
import { pipe, prevDefault, formFromEvent } from "../../utils"

const withSubmitHandler = ({
	submitProp,
	validator,
	validationState
}) => Component =>
	class AddForm extends React.Component {
		state = validationState

		setValidationState = (name, value, callback) =>
			this.setState(
				s => ({
					...s,
					[name]: validator[name](value)
				}),
				callback
			)

		validateOnChange = pipe(
			prevDefault,
			e => {
				const { name, value } = e.target
				this.setValidationState(name, value)
			}
		)

		handleSubmit = pipe(
			prevDefault,
			formFromEvent,
			formValues =>
				Object.entries(formValues).forEach(([name, value]) =>
					this.setValidationState(name, value, () => {
						//Everything is clean
						if (
							Object.values(this.state).every(
								inputError => inputError.trim().length === 0
							)
						) {
							typeof submitProp === "string"
								? this.props[submitProp](formValues)
								: submitProp(formValues, this.props)
						}
					})
				)
		)

		render() {
			return (
				<Component
					{...this.props}
					handleSubmit={this.handleSubmit}
					errors={this.state}
					handleChange={this.validateOnChange}
				/>
			)
		}
	}

export default withSubmitHandler
