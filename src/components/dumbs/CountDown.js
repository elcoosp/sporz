import React from "react"
import P from "prop-types"
export class CountDown extends React.Component {
	static propTypes = {
		startCount: P.number.isRequired, // int: which number to satrt from
		interval: P.number, // ms: between count set state
		offset: P.number // int: count decrease by interval
	}

	static defaultProps = {
		interval: 1000,
		offset: 1
	}

	state = {
		count: this.props.startCount
	}

	componentDidMount = () =>
		(this.interval = setInterval(
			() => this.setState(s => ({ ...s, count: s.count - this.props.offset })),
			this.props.interval
		))

	componentWillUnmount = () => clearInterval(this.interval)

	render() {
		return this.props.children(this.state)
	}
}

export default CountDown
