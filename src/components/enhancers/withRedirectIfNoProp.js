import { Redirect } from "react-router-dom"
import React from "react"

const withRedirectIfNoProp = ({ prop, redirect }) => Component => props => {
	return props[prop] === undefined ? (
		<Redirect to={redirect} />
	) : (
		<Component {...props} />
	)
}

export default withRedirectIfNoProp
