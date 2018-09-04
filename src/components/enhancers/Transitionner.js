import React from "react"
import P from "prop-types"

class Transitionner extends React.Component {
	static propTypes = {
		initial: P.string.isRequired,
		states: P.shape({}).isRequired
	}

	state = {
		current: this.props.initial,
		forwardedProps: {}
	}

	transition = (current, forwardedProps = {}) =>
		this.setState({ current, forwardedProps })

	render() {
		const Component = this.props.states[this.state.current]
		return (
			<Component transition={this.transition} {...this.state.forwardedProps} />
		)
	}
}

export default Transitionner
