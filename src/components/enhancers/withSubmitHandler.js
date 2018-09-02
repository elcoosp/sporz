import React from "react"
import { pipe, prevDefault, formFromEvent } from "../../utils"

const withSubmitHandler = ({ submitProp }) => Component =>
	class AddForm extends React.Component {
		handleSubmit = pipe(
			prevDefault,
			formFromEvent,
			this.props[submitProp]
		)

		render() {
			return <Component handleSubmit={this.handleSubmit} {...this.props} />
		}
	}

export default withSubmitHandler
