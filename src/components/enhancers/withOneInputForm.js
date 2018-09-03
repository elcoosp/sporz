import React from "react"
import { withSubmitHandler } from "./"

const withOneInputForm = ({
	inputName,
	submitHandlerProp,
	errorMessage,
	label,
	buttonLabel
}) =>
	withSubmitHandler({
		submitProp: submitHandlerProp,
		validationState: {
			[inputName]: ""
		},
		validator: {
			[inputName]: value => (value.trim().length > 0 ? "" : errorMessage)
		}
	})(({ handleSubmit, errors, handleChange }) => (
		<form onSubmit={handleSubmit} onChange={handleChange}>
			{label && <label htmlFor={inputName}>{label}</label>}
			<input type="text" name={inputName} />
			<button type="submit">{buttonLabel}</button>
			{errors.name && <span>{errors.name}</span>}
		</form>
	))

export default withOneInputForm
