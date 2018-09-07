import React, { Component } from "react"
import P from "prop-types"
import { connect } from "react-redux"

export class HomeInstructions extends Component {
	static propTypes = {
		hasExercises: P.bool.isRequired,
		hasPrograms: P.bool.isRequired,
		hasTrained: P.bool.isRequired
	}

	render() {
		return <div />
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeInstructions)
