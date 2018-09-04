import React from "react"
import P from "prop-types"
export class CountDown extends React.Component {
	static propTypes = {
		start: P.number.isRequired, // int: Which number to satrt from
		interval: P.number, // ms: Between count set state
		offset: P.number, // int: Count decrease by interval
		threshold: P.number.isRequired, // At which count to call the guard
		guard: P.func.isRequired // A callback invoked when the treshold is reached
	}
	static defaultProps = {
		interval: 1000,
		offset: 1
	}

	state = {
		count: this.props.start,
		isPaused: false
	}
	componentDidMount = () => this.resume()
	componentWillUnmount = () => clearInterval(this.ownInterval)

	resume = () =>
		(this.ownInterval = setInterval(
			() =>
				this.setState(
					s => ({ ...s, isPaused: false, count: s.count - this.props.offset }),
					() =>
						this.state.count <= this.props.threshold &&
						(this.pause(), this.props.guard())
				),
			this.props.interval
		))

	pause = () =>
		this.setState(
			s => ({ ...s, isPaused: true }),
			() => clearInterval(this.ownInterval)
		)

	render() {
		const {
			props: { children },
			state: { count, isPaused },
			resume,
			pause
		} = this
		return children({
			count,
			pause,
			resume,
			isPaused
		})
	}
}

export default CountDown
