import React from "react"
import styled from "styled-components"

import { withSubmitHandler } from "./"
import { Input, Button, Form, Label } from "../style"

const S = {
	Form: styled(Form)`
		height: 10rem;
	`
}
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
		<S.Form onSubmit={handleSubmit} onChange={handleChange}>
			{label && <Label htmlFor={inputName}>{label}</Label>}
			<Input type={inputType} name={inputName} />
			<Button type="submit">{buttonLabel}</Button>
			{errors[inputName] && <span>{errors[inputName]}</span>}
		</S.Form>
	))

export default withOneInputForm
