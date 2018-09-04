import React from "react"
import { withSubmitHandler } from "./"

const withOneInputForm = ({
	inputType = "text",
	inputValidator = value => value.trim().length > 0,
	inputName,
	submitHandlerProp,
	errorMessage,
	label,
	buttonLabel
} = {}) =>
	withSubmitHandler({
		submitProp: submitHandlerProp,
		validationState: {
			[inputName]: ""
		},
		validator: {
			[inputName]: value => (inputValidator(value) ? "" : errorMessage)
		}
	})(({ handleSubmit, errors, handleChange }) => (
		<form onSubmit={handleSubmit} onChange={handleChange}>
			{label && <label htmlFor={inputName}>{label}</label>}
			<input type={inputType} name={inputName} />
			<button type="submit">{buttonLabel}</button>
			{errors.name && <span>{errors.name}</span>}
		</form>
	))

export default withOneInputForm
