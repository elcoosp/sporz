import P from "prop-types"
import { connect } from "react-redux"

import { RecordActions } from "../../redux/ducks/Record"
import { withOneInputForm } from "../enhancers"

const AddRecordForm = withOneInputForm({
	inputName: "repetitions",
	inputValidator: x => parseInt(x, 10) >= 0,
	submitHandlerProp: ({ repetitions }, props) =>
		props.addRecord({
			repetitions: parseInt(repetitions, 10),
			exerciseId: props.exerciseId
		}),
	errorMessage: "I need a repetition count",
	buttonLabel: "Add a record",
	inputType: "number"
})

AddRecordForm.propTypes = {
	addRecord: P.func.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, { exerciseId }) => ({
	addRecord: r => dispatch(RecordActions.add({ exerciseId, ...r }))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddRecordForm)
