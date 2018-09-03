import React from "react"
import P from "prop-types"

class Transitionner extends React.Component {
	static propTypes = {
		initial: P.string.isRequired,
		states: P.shape({}).isRequired
	}

	state = {
		current: this.props.initial
	}

	transition = current => this.setState({ current })

	render() {
		const Component = this.props.states[this.state.current]
		return <Component transition={this.transition} />
	}
}

export default Transitionner
