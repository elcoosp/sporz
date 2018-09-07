import React, { Fragment } from "react"

import P from "prop-types"
import { connect } from "react-redux"
import { ToastContainer, toast } from "react-toastify"

import { RecordActions } from "../../redux/ducks/Record"
import { withOneInputForm } from "../enhancers"

const AddRecordForm = withOneInputForm({
	label: "Number of repetitions for the previous exercise:",
	inputName: "repetitions",
	inputValidator: x => parseInt(x, 10) >= 0,
	submitHandlerProp: ({ repetitions }, props) => {
		toast(
			`Saved a new record of ${repetitions} repetitions for ${
				props.exerciseName
			}`
		)
		props.addRecord({
			repetitions: parseInt(repetitions, 10)
		})
	},
	errorMessage: "I need a repetition count",
	buttonLabel: "Add",
	inputType: "number"
})

AddRecordForm.propTypes = {
	addRecord: P.func.isRequired,
	exerciseId: P.string.isRequired,
	timing: P.number.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, { exerciseId, timing }) => ({
	addRecord: r => dispatch(RecordActions.add({ exerciseId, timing, ...r }))
})

const AddRecordFormWithToast = props => (
	<Fragment>
		<AddRecordForm {...props} />
		<ToastContainer />
	</Fragment>
)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddRecordFormWithToast)
