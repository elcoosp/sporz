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
			return (
				<form onSubmit={this.handleSubmit}>
					<Component />
				</form>
			)
		}
	}

export default withSubmitHandler
